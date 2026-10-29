"use client";

import Image from "next/image";
import Link from "next/link";

const questions = [
  { label: "Do You Have A 3 Year Valid Driver's License?", name: "valid_drivers_license" },
  { label: "Are You Willing To Take A Drug Test Prior To Employment?", name: "willing_drug_test" },
  { label: "Are You Willing To Take A Physical Exam Prior To Employment?", name: "willing_physical_exam" },
  { label: "Are You Willing To Take A One Day In-Person Training Prior To Employment?", name: "willing_training" },
  { label: "Are You Willing To Pass The Secretary Of State's DL School Driver Endorsement Tests?", name: "willing_endorsement_tests" },
  { label: "Do You Consent To Have A Company Dash-Cam Installed In Your Vehicle?", name: "consent_dash_cam" },
];

const driverBenefits = [
  "Competitive Hourly Pay & Weekly Direct Deposit",
  "Flexible Hours (Morning & Afternoon Split Shifts)",
  "No Nights, Weekends, or Major Holidays",
  "Modern, Well-Maintained & Inspected School Vehicles",
  "Welcoming, Local Chicago Community Team",
];

const monitorBenefits = [
  "Competitive Hourly Pay & Weekly Direct Deposit",
  "Flexible Morning & Afternoon Split Shifts",
  "No Nights, Weekends, or Major Holidays",
  "Supportive Drivers and a Welcoming Local Team",
  "Make a Difference in Students’ Daily Routines",
];

function TextField({
  label,
  name,
  required = false,
  className = "",
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  required?: boolean;
  className?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-xs font-semibold text-[#14213d]">
        {label}{required ? " *" : ""}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-[#f97316] focus:ring-2 focus:ring-orange-100"
      />
    </label>
  );
}

export default function DriverApplication({
  initialPosition,
}: {
  initialPosition: "driver" | "monitor";
}) {
  const benefits = initialPosition === "driver" ? driverBenefits : monitorBenefits;

  return (
    <div className="driver-application-page min-h-screen bg-[#f4f7fb] text-[#14213d]">
      <header className="relative z-10 flex min-h-[60px] items-center justify-between gap-3 bg-white px-3 py-2 shadow-sm sm:h-[68px] sm:px-8">
        <Link href="/#home" aria-label="SLN Transportation home">
          <Image src="/images/logo.webp" alt="SLN Transportation" width={240} height={54} priority className="h-7 w-auto object-contain sm:h-10" />
        </Link>
        <Link href="/#home" className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-[#193b7a] px-2.5 py-2 text-[11px] font-semibold text-[#193b7a] transition hover:bg-[#193b7a] hover:text-white sm:gap-2 sm:px-4 sm:text-sm">
          <span aria-hidden="true">←</span> Back to Main Website
        </Link>
      </header>

      <section className="bg-gradient-to-r from-[#10192d] via-[#172d5a] to-[#203e82] px-5 pb-20 pt-10 text-center text-white sm:pt-12">
        <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">Join SLN Transportation</h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base">
          We are hiring dedicated School Vehicle Drivers and Vehicle Monitors in<br className="hidden sm:block" /> Chicago, IL. Fill out the quick application below to get started.
        </p>
      </section>

      <main className="mx-auto -mt-12 grid max-w-[1480px] items-start gap-6 px-3 pb-12 sm:px-6 lg:grid-cols-[minmax(0,1.65fr)_minmax(320px,1fr)] lg:gap-10">
        <form action="https://formsubmit.co/slntransportationllc999@gmail.com" method="POST" className="min-w-0 rounded-2xl border-t-[3px] border-[#f97316] bg-white px-5 py-7 shadow-xl shadow-slate-900/10 sm:px-8 sm:py-9">
          <input type="hidden" name="_subject" value={`New ${initialPosition === "driver" ? "Driver" : "Monitor"} Application - SLN Transportation`} />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <p className="mx-auto mb-5 max-w-3xl text-center text-sm leading-relaxed text-slate-700 sm:text-base">
            If you are a caring and responsible individual willing to fulfill the mission to deliver our precious cargo (school age students) from home to school and school to home
          </p>
          <h2 className="mb-7 text-center font-heading text-2xl font-extrabold tracking-wide text-[#10192d] sm:text-3xl">TELL US ABOUT YOU...</h2>

          <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
            <TextField label="First Name" name="first_name" required />
            <TextField label="Last Name" name="last_name" />
            <TextField label="Address (Street, City, State & Zip Code)" name="address" required placeholder="Street, City, State & Zip Code" className="sm:col-span-2" />
            <TextField label="Email Address" name="email" type="email" required />
            <TextField label="Phone Number" name="phone" type="tel" required />
          </div>

          <fieldset className="mt-6 border-b border-slate-200 pb-5">
            <legend className="mb-2 text-xs font-semibold">Position Desired *</legend>
            <label className="mr-5 inline-flex items-center gap-2 text-sm"><input type="radio" name="position_desired" value="School Vehicle Driver" defaultChecked={initialPosition === "driver"} required className="accent-[#f97316]" /> School Vehicle Driver</label>
            <label className="inline-flex items-center gap-2 text-sm"><input type="radio" name="position_desired" value="School Vehicle Monitor" defaultChecked={initialPosition === "monitor"} className="accent-[#f97316]" /> School Vehicle Monitor</label>
          </fieldset>

          {questions.map((question) => (
            <fieldset key={question.name} className="border-b border-slate-200 py-4">
              <legend className="mb-2 text-xs font-semibold">{question.label} *</legend>
              <label className="mr-5 inline-flex items-center gap-2 text-sm"><input type="radio" name={question.name} value="Yes" required className="accent-[#f97316]" /> Yes</label>
              <label className="inline-flex items-center gap-2 text-sm"><input type="radio" name={question.name} value="No" className="accent-[#f97316]" /> No</label>
            </fieldset>
          ))}

          <label className="mt-5 block text-xs font-semibold">
            Tell Us Why Do You Think You Are The Right Candidate For This Position? *
            <textarea name="why_you_are_a_good_candidate" required rows={4} className="mt-2 w-full rounded-md border border-slate-200 p-3 text-sm outline-none focus:border-[#f97316] focus:ring-2 focus:ring-orange-100" />
          </label>

          <fieldset className="mt-5 border-b border-slate-200 pb-5">
            <legend className="mb-3 text-xs font-semibold">When Are You Available For An In-Person Or Zoom Interview?</legend>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {(["Morning", "Afternoon", "Evening"] as const).map((time) => (
                <label key={time} className="inline-flex items-center gap-2"><input type="checkbox" name="interview_availability" value={time} className="accent-[#f97316]" /> {time}</label>
              ))}
            </div>
          </fieldset>

          <button type="submit" className="mx-auto mt-6 block min-w-40 rounded-lg bg-[#f97316] px-8 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600">SUBMIT</button>
        </form>

        <aside className="grid min-w-0 gap-4 lg:mt-0">
          <div className="relative h-52 overflow-hidden rounded-xl shadow-lg sm:h-64">
            <Image src="/images/driver.webp" alt="SLN Transportation driver behind the wheel" fill sizes="(min-width: 1024px) 1100px, 100vw" className="object-cover object-center" />
          </div>
          <section className="rounded-xl border border-slate-200 border-t-[3px] border-t-[#193b7a] bg-white p-5 shadow-sm sm:p-7">
            <h2 className="mb-4 font-heading text-lg font-extrabold text-[#193b7a]">Why {initialPosition === "driver" ? "Drive" : "Join"} With SLN?</h2>
            <ul className="space-y-3">
              {benefits.map((benefit) => <li key={benefit} className="flex items-start gap-3 text-sm"><span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-50 text-xs font-bold text-[#f97316]">✓</span>{benefit}</li>)}
            </ul>
          </section>
          <div className="relative h-52 overflow-hidden rounded-xl shadow-lg sm:h-64">
            <Image src="/images/monitor.webp" alt="SLN transportation team caring for students" fill sizes="(min-width: 1024px) 1100px, 100vw" className="object-cover object-center" />
          </div>
        </aside>
      </main>

      <footer className="flex flex-col items-start justify-between gap-3 bg-[#10192d] px-5 py-6 text-xs text-blue-200 sm:flex-row sm:items-center sm:px-8">
        <p>© {new Date().getFullYear()} SLN Transportation. 9002 Senate Dr, Des Plaines, IL 60016.</p>
        <Link href="/#home" className="underline underline-offset-2 hover:text-white">Return to Main Website</Link>
      </footer>
    </div>
  );
}
