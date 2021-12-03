import { DateTimeRange } from './datetime-range.model';
import { ParcelDimensions } from './parcel-dimensions.model';
import { ParcelEvent } from './parcel-event';

export interface TrackingInfo {
  // Tracking number corresponding to this tracked object
  trackingNumber: string;

  // Date and time range of esitmated delivery
  estimatedDelivery: DateTimeRange;

  // Dimensions of parcel itself
  dimensions: ParcelDimensions;

  // Status short-codes, yet unknown
  status: string;

  // Weight of parcel in kg
  weight: number;

  // Type of parcel, either "Paket" or "Brief", DE
  category: string;

  // List of tags, meaning is yet unknown
  tags: [ { key: string } ]

  // Individual stages the parcel goes through
  events: ParcelEvent;
}