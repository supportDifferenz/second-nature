import Typography from "@/components/atoms/typography/Typography";
import MainLayout from "@/components/templates/MainLayout";
import React from "react";

function page() {
  return (
    <MainLayout>
      <div className="my-[var(--space-40-90)]">
        <Typography
          tag="h2"
          text="Terms And "
          className="text-primary-dark text-center"
        >
          <Typography tag="span" text="Conditions" className="highlight" />
        </Typography>
      </div>
      <div className="max-w-[90.65vw] lg:max-w-[62.5vw] mx-auto pb-[var(--space-120-180)]">
        <div className="flex flex-col gap-[var(--space-15-25)] mb-[var(--space-40-60)]">
          <Typography
            tag="h5"
            text="Plan Types "
            className="text-secondary-1 !font-bold"
          />
          <div className="flex flex-col gap-[var(--space-10-15)]">
            <Typography
              tag="p"
              text="Second Nature offers two main subscription options: the Regular Plan and the Trial Plan. The Regular Plan is an auto-renewing subscription that renews every 28 days and includes a 25% discount on the first month only. Customers can customize their plan by choosing the type of protein (such as chicken, beef, or lamb), selecting the portion size (Half Bowl or Full Bowl), and inputting their pet's size, which dynamically affects the price. The default selection displayed to customers is the Chicken + Full Bowl combination, as it offers optimal value and profitability. This plan is labeled as the 'Recommended Plan.'"
            />

            <Typography
              tag="p"
              text="The Trial Plan is a one-week, one-time purchase designed for first-time users who want to try the product before committing. It does not auto-renew, but customers may manually reorder it at any time. As the end of the trial period approaches, customers will see a reminder message that their plan is ending soon, encouraging them to reorder. If no action is taken, the plan is marked as expired."
            />
          </div>
        </div>

        <div className="flex flex-col gap-[var(--space-15-25)] mb-[var(--space-40-60)]">
          <Typography
            tag="h5"
            text="Auto-Renewal and Plan Changes"
            className="text-secondary-1"
          />
          <div className="flex flex-col">
            <Typography
              tag="p"
              text="The Regular Plan automatically renews every 28 days. Customers can make changes to their plan—such as switching protein type or modifying their portion size—at any time. However, these changes will only take effect if submitted at least five days before the next scheduled delivery. If changes are made within that five-day window, they will be scheduled for the following delivery cycle. The interface clearly displays when the changes will take effect to avoid confusion."
            />
          </div>
        </div>

        <div className="flex flex-col gap-[var(--space-15-25)] mb-[var(--space-40-60)]">
          <Typography
            tag="h5"
            text="Upgrades and Downgrades"
            className="text-secondary-1"
          />
          <div className="flex flex-col gap-[var(--space-10-15)]">
            <Typography
              tag="p"
              text="Customers on a Half Bowl plan can upgrade to a Full Bowl at any time. As long as the upgrade is requested more than five days before the next delivery, it will take effect in the upcoming cycle. If requested within the buffer period, it will be deferred to the subsequent cycle. Payment for the upgraded plan will be collected at the time of confirmation."
            />
            <Typography
              tag="p"
              text="Downgrading from a Full Bowl to a Half Bowl is also possible, but only takes effect at the start of the next billing cycle. Mid-cycle downgrades are not permitted, and there are no partial refunds. However, users may request that the price difference be applied as account credit for future use. The upgrade or downgrade options are clearly shown in the user's account dashboard, based on their current plan."
            />
          </div>
        </div>

        <div className="flex flex-col gap-[var(--space-15-25)] mb-[var(--space-40-60)]">
          <Typography
            tag="h5"
            text="Pause Policy"
            className="text-secondary-1 !font-bold"
          />
          <div className="flex flex-col gap-[var(--space-10-15)]">
            <Typography
              tag="p"
              text="Second Nature allows customers to pause their Regular Plan deliveries for a duration of up to eight weeks. The interface offers predefined pause options of 1 to 4 weeks and allows users to select custom pause durations up to 8 weeks. All pauses must conform to full-week increments (Sunday to Saturday), aligning with the company's delivery cycle."
            />
            <Typography
              tag="p"
              text="Pauses must be scheduled at least five days in advance of the next delivery to take effect on time. If a pause is initiated within the five-day window, the pause will begin in the next eligible week. During the pause period, customers can choose to restart their plan at any time. No fees are charged for pausing service, though a reasonable use policy may be added to limit abuse."
            />
          </div>
        </div>

        <div className="flex flex-col gap-[var(--space-15-25)] mb-[var(--space-40-60)]">
          <Typography
            tag="h5"
            text="Cancellation Policy"
            className="text-secondary-1 !font-bold"
          />
          <div className="flex flex-col gap-[var(--space-10-15)]">
            <Typography
              tag="p"
              text="Customers who wish to cancel their subscription can do so via the same screen that contains the pause and downgrade options. The cancellation feature is intentionally placed within a deeper layer of the user interface to reduce accidental cancellations and encourage retention."
            />
            <Typography
              tag="p"
              text="When initiating cancellation, the customer is prompted with options to pause or downgrade instead. If cancellation is confirmed, the user account remains active, and all subscription preferences and history are retained. Users may restart their subscription at any time from their account dashboard, with service resuming from the next available delivery cycle."
            />
          </div>
        </div>

        <div className="flex flex-col gap-[var(--space-15-25)] mb-[var(--space-40-60)]">
          <Typography
            tag="h5"
            text="Account and Order History"
            className="text-secondary-1 !font-bold"
          />
          <div className="flex flex-col gap-[var(--space-10-15)]">
            <Typography
              tag="p"
              text="In the account dashboard, customers can view their order history, including current and past subscriptions, downloadable invoices, and details such as portion size, protein, pricing, and renewal dates. The system supports multiple pet profiles, with each pet's plan displayed in a separate card for easy reference. Delivery schedules and changes are tracked per pet."
            />
          </div>
        </div>

        <div className="flex flex-col gap-[var(--space-15-25)] mb-[var(--space-40-60)]">
          <Typography
            tag="h5"
            text="Weekly Calendar and Delivery Logic"
            className="text-secondary-1 !font-bold"
          />
          <div className="flex flex-col">
            <Typography
              tag="p"
              text="The subscription system uses a weekly delivery logic based on the Qatari calendar. Delivery weeks run from Sunday to Saturday. All pause and plan changes are calculated in full weekly blocks, and this is reflected in the customer interface to ensure clarity."
            />
          </div>
        </div>

        <div className="flex flex-col gap-[var(--space-15-25)] mb-[var(--space-40-60)]">
          <Typography
            tag="h5"
            text="Customer Support and Feedback"
            className="text-secondary-1 !font-bold"
          />
          <div className="flex flex-col">
            <Typography
              tag="p"
              text="Second Nature provides a feedback mechanism via its 'Contact Us' page, which includes a phone number and email address. A feedback form may be added to collect insights on cancellations, improvement suggestions, or specific service concerns."
            />
          </div>
        </div>

        <div className="flex flex-col gap-[var(--space-15-25)] mb-[var(--space-40-60)]">
          <Typography
            tag="h5"
            text="Contact Us"
            className="text-secondary-1 !font-bold"
          />
          <div className="flex flex-col gap-[var(--space-15-25)]">
            <Typography
              tag="p"
              text="For questions, corrections, complaints, or more information on how we manage your data, please contact:"
            />
            <ul className="flex flex-col gap-0.5 ml-6 marker:text-[10px] marker:text-gray-700">
              <li className="font-semibold">Second Nature</li>
              <li>[Insert Address, Doha, Qatar]</li>
              <li>Email: [insert@email.com]</li>
              <li>Phone: [Insert number]</li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default page;
