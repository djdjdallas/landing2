"use client";
import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function CogIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  );
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function InboxIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}

function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function MailOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </svg>
  );
}

function PlugIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  );
}

export default function Page() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(data.message);
      setShowNotification(true);

      // Hide the notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    } catch (error) {
      setMessage("Error sending email");
      setShowNotification(true);

      // Hide the notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  };

  return (
    <>
      <header className="p-4 flex justify-end max-w-7xl mx-auto"></header>
      <main className="flex flex-col min-h-screen bg-background">
        <section className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-24 lg:py-32">
          <div className="max-w-xl text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Elevate Your Email Marketing with Mail Blitz
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Streamline your customer communication and boost engagement with
              our powerful email marketing solution.
            </p>
            <form
              className="w-full max-w-md flex gap-2"
              onSubmit={handleSubmit}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit">Notify Me</Button>
            </form>
            {showNotification && (
              <Alert>
                <AlertTitle>Thank you! You're now Subscribed.</AlertTitle>
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
            <div className="space-y-2">
              <MailOpenIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Automated Outreach</h3>
              <p className="text-muted-foreground">
                Effortlessly send personalized emails to your customers at
                scale.
              </p>
            </div>
            <div className="space-y-2">
              <InfoIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Insightful Analytics</h3>
              <p className="text-muted-foreground">
                Track the performance of your email campaigns and optimize for
                better results.
              </p>
            </div>
            <div className="space-y-2">
              <CogIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Customizable Workflows</h3>
              <p className="text-muted-foreground">
                Tailor your email automation to fit your unique business needs.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
            <div className="space-y-2">
              <InboxIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Unified Inbox</h3>
              <p className="text-muted-foreground">
                Manage all your customer emails in one centralized location.
              </p>
            </div>
            <div className="space-y-2">
              <CalendarIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Scheduling</h3>
              <p className="text-muted-foreground">
                Schedule email campaigns and follow-ups with ease.
              </p>
            </div>
            <div className="space-y-2">
              <InfoIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Reporting</h3>
              <p className="text-muted-foreground">
                Gain insights into your email performance and customer
                engagement.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
            <div className="space-y-2">
              <CogIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Automation</h3>
              <p className="text-muted-foreground">
                Streamline your email workflows with powerful automation tools.
              </p>
            </div>
            <div className="space-y-2">
              <FilterIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Segmentation</h3>
              <p className="text-muted-foreground">
                Tailor your email campaigns to specific customer segments.
              </p>
            </div>
            <div className="space-y-2">
              <PlugIcon className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Integrations</h3>
              <p className="text-muted-foreground">
                Seamlessly connect Mail Blitz with your existing tools and
                workflows.
              </p>
            </div>
          </div>
        </section>
        <footer className="bg-muted p-6 md:p-8 text-xs text-muted-foreground">
          <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 mx-auto">
            <p>&copy; 2024 Mail Blitz. All rights reserved.</p>
            <nav className="flex gap-4">
              <Link href="#" className="hover:underline" prefetch={false}>
                Privacy
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Terms
              </Link>
              <Link href="#" className="hover:underline" prefetch={false}>
                Contact
              </Link>
            </nav>
          </div>
        </footer>
      </main>
    </>
  );
}
