import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TrackingInfo } from '../models/tracking-info.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class TrackingNumberService {

  // Url of target GraphQL server
  private serverURL = 'https://api.post.at/sendungen/sv/graphqlPublic';

  // Proxied url, since they use the stupid CORS header
  private proxiedURL = `https://dev.blvckbytes.dev/proxy?username=${environment.PROXY_USER}&password=${environment.PROXY_PASSWORD}&url=${this.serverURL}`;

  constructor(
    private client: HttpClient,
  ) {}

  /**
   * Build the fetching graphql query using a specific tracking number
   * @param trackingNumber Number to request information on
   * @returns Built query string, ready to be POSTed
   */
  private buildQuery(trackingNumber: string): string {
    return `query {
      einzelsendung(sendungsnummer: "${trackingNumber}") {
        sendungsnummer
        estimatedDelivery {
          startDate
          endDate
          startTime
          endTime
        }
        dimensions {
          height
          width
          length
        }
        status
        weight
        sendungsEvents {
          timestamp
          status
          reasontypecode
          text
          textEn
          eventpostalcode
          eventcountry
        }
        produktkategorie
        tags {
          key
        }
      }
    }`;
  }

  /**
   * Get the tracking information corresponding to a provided number
   * @param trackingNumber Tracking number of target object
   */
  getInfo(trackingNumber: string): Observable<TrackingInfo> {
    return this.client.post(this.proxiedURL, { query: this.buildQuery(trackingNumber) }).pipe(
      // Remove the unneeded top level wrappers
      map((it: any) => it.data.einzelsendung),

      /*
        Mapping their field names to mine, since I don't like the mix
        of german and english variable names.
      */
      map((it: any) => {
        return {
          trackingNumber: it.sendungsnummer,
          estimatedDelivery: it.estimatedDelivery,
          dimensions: it.dimensions,
          status: it.status,
          weight: it.weight,
          events: (it.sendungsEvents || []).map((e: any) => ({
            timestamp: e.timestamp,
            status: e.status,
            reasontypecode: e.reasontypecode,
            text: e.text,
            textEn: e.textEn,
            postalcode: e.eventpostalcode,
            country: e.eventcountry
          })),
          category: it.produktkategorie,
          tags: (it.tags || []).map((t: any) => ({
            key: t.key,
          }))
        } as TrackingInfo;
      }),
    );
  }
}