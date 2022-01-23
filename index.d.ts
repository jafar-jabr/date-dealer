import * as dateDealer from './lib/DateDealer';

export function getDatesArray(startDate: string | Date, numberOfDates: number, include?: boolean): string[];
export function getDatesBefore(startDate: string | Date, numberOfDates: number, include?: boolean): string[];
export function getDatesAfter(startDate: string | Date, numberOfDates: number, include?: boolean): string[];
export function getDatesBetween(start: Date | string, end: Date | string): string[];
export function addMinutes(timeString: string, minutesToAdd: number): string;
export function getDayIndex(theDate: string | Date): number;
export function timeStampOf(date: string | Date): number;
export function ISOStringOf(date: string | Date): string;
export function isWeekEnd(date: string | Date): boolean;
export function atThisMoment(format?: string): string;
export function beforeYesterday(format?: string): string;
export function yesterday(format?: string): string;
export function tomorrow(format?: string): string;
export function afterTomorrow(format?: string): string;
export function mondayThisWeek(format?: string): string;
export function tuesdayThisWeek(format?: string): string;
export function wednesdayThisWeek(format?: string): string;
export function thursdayThisWeek(format?: string): string;
export function fridayThisWeek(format?: string): string;
export function saturdayThisWeek(format?: string): string;
export function sundayThisWeek(format?: string): string;
export function doFormat(date: string | Date, format: string): string;
export function dateOf(dateStr: string): Date;
export function calculateAge(birthDate: string | Date): {
    months: number;
    days: number;
    years: number;
};
export function timeBetween(startTime: string | Date, endTime: string | Date): {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export function timeSince(refTime: string | Date): {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export function timeUntil(refTime: string | Date): {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export function dateObjectOf(date: string | Date): {
    plusYears(x: number): typeof dateDealer.dateObjectOf,
    plusMonths(x: number): typeof dateDealer.dateObjectOf,
    plusDays(x: number): typeof dateDealer.dateObjectOf,
    plusHours(x: number): typeof dateDealer.dateObjectOf,
    plusMinutes(x: number): typeof dateDealer.dateObjectOf,
    plusSeconds(x: number): typeof dateDealer.dateObjectOf,
    minusYears(x: number): typeof dateDealer.dateObjectOf,
    minusMonths(x: number): typeof dateDealer.dateObjectOf,
    minusDays(x: number): typeof dateDealer.dateObjectOf,
    minusHours(x: number): typeof dateDealer.dateObjectOf,
    minusMinutes(x: number): typeof dateDealer.dateObjectOf,
    minusSeconds(x: number): typeof dateDealer.dateObjectOf,
    get(format?: string): string,
};

/**
 *
 * @param format
 * @returns {*}
 */
export function get(format?: string): string;

export function parseToDate(dateString: string): Date;

export function dateFormat(date: string|Date, format: string): string;
