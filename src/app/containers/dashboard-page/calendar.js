'use client'

import { Calendar } from "@fullcalendar/core";
import FullCalendar from '@fullcalendar/react'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import dayGridPlugin from '@fullcalendar/daygrid'

const MonthCalendar = () => {

    return (
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FHo_Chi_Minh&bgcolor=%23ffffff&title=Holdddd&src=dHVhbmRhdGRvLjAzQGdtYWlsLmNvbQ&src=cmxjZjNucHFnOGJ0aTJvaGtmOGhhOXRlYTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bzQ4czg2cXJrcWNsMXRsZTBvN2RuYTlhdjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=a3RoZjJrbzJxNTRwZnB0NnZxZmtrYnM0NDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=djNqdDgxN2t2cmk1Nmd2ZjdqbWV2bWw5NzRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=MTBhZmtzNWdzOWZkcnA0ZDg5MjJnZWE1aW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NmhndGlyZjk3dDRjaDFsbGpqZm4yODA3YzRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=MTZwM29oNmNtMDBqMjNtbXQwaXRpNHU1MGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aHBpcWpoMG5qYW9ncHE2NTl1djBxZnR1N3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F6BF26&color=%23D81B60&color=%23616161&color=%23795548&color=%23cc1d00&color=%23EF6C00&color=%234682b4&color=%230b6623&color=%236f2da8" className="w-full h-full"></iframe>
    )
}

export default MonthCalendar;


