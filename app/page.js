"use client";
import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  CalendarIcon,
  CogIcon,
  FilterIcon,
  InboxIcon,
  InfoIcon,
  MailOpenIcon,
  PlugIcon,
} from "@/components/Icons";
// import {
//   CalendarIcon,
//   CogIcon,
//   FilterIcon,
//   InboxIcon,
//   InfoIcon,
//   MailOpenIcon,
//   PlugIcon,
//   XIcon,
// } from "/components/icons";

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
