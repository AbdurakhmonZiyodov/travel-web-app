import {
  Globe,
  Shield,
  Plane,
  FileCheck,
  Hotel,
  Car,
} from "lucide-react";
import type { ServiceItem } from "./types";

export const SERVICES: ServiceItem[] = [
  {
    id: "tour-packages",
    icon: Globe,
    titleKey: "services.tourPackages.title",
    descriptionKey: "services.tourPackages.description",
  },
  {
    id: "visa-support",
    icon: FileCheck,
    titleKey: "services.visaSupport.title",
    descriptionKey: "services.visaSupport.description",
  },
  {
    id: "flight-tickets",
    icon: Plane,
    titleKey: "services.flightTickets.title",
    descriptionKey: "services.flightTickets.description",
  },
  {
    id: "insurance",
    icon: Shield,
    titleKey: "services.insurance.title",
    descriptionKey: "services.insurance.description",
  },
  {
    id: "hotel-booking",
    icon: Hotel,
    titleKey: "services.hotelBooking.title",
    descriptionKey: "services.hotelBooking.description",
  },
  {
    id: "transfer",
    icon: Car,
    titleKey: "services.transfer.title",
    descriptionKey: "services.transfer.description",
  },
];
