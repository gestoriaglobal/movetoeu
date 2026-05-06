export type EligibilityResult = "eligible" | "borderline" | "ineligible";

export type QuizAnswers = {
  nationality: string;
  destination: string;
  purpose: string;
  income_range: string;
  family_status: string;
};

// Map income range strings to numeric monthly values
const INCOME_MAP: Record<string, number> = {
  "under-1000": 500,
  "1000-2000": 1500,
  "2000-3000": 2500,
  "3000-3680": 3340,
  "3680-5000": 4340,
  "5000-plus": 6000,
};

export function getIncomeValue(income_range: string): number {
  return INCOME_MAP[income_range] ?? 0;
}

export function checkEligibility(answers: QuizAnswers): {
  result: EligibilityResult;
  threshold: number;
  income: number;
  redFlags: string[];
} {
  const income = getIncomeValue(answers.income_range);
  const redFlags: string[] = [];

  let threshold = 0;

  if (answers.destination === "portugal") {
    if (answers.family_status === "solo") threshold = 3680;
    else if (answers.family_status === "partner") threshold = 5520;
    else if (answers.family_status === "partner-children") threshold = 6624;

    if (answers.purpose === "business-owner") {
      redFlags.push(
        "Portugal D8 is designed for remote employees and freelancers. Business owners may need a different visa type (e.g., D2 Entrepreneur Visa)."
      );
    }
  } else if (answers.destination === "spain") {
    threshold = 2646;
    if (answers.purpose === "business-owner") {
      redFlags.push(
        "Spain's Digital Nomad Visa requires working for non-Spanish companies. Business owners may face additional requirements."
      );
    }
  } else if (answers.destination === "greece") {
    threshold = 3500;
  }

  redFlags.push(
    "All foreign documents must be apostilled and officially translated. Missing this step delays 40% of applications."
  );

  if (income < threshold && income > 0) {
    redFlags.unshift(
      `Your stated income (€${income.toLocaleString()}) is below the minimum required (€${threshold.toLocaleString()}). This is the most common rejection reason.`
    );
  }

  redFlags.push(
    "You'll need a formal 12-month lease agreement or deed before applying — Airbnb bookings are not accepted as proof of accommodation."
  );

  let result: EligibilityResult;
  if (income >= threshold && threshold > 0) {
    result = "eligible";
  } else if (income >= threshold * 0.85 && threshold > 0) {
    result = "borderline";
  } else {
    result = "ineligible";
  }

  return { result, threshold, income, redFlags };
}

export const VISA_NAMES: Record<string, string> = {
  portugal: "Portugal D8 Digital Nomad Visa",
  spain: "Spain Digital Nomad Visa",
  greece: "Greece Digital Nomad Visa",
};

export const VISA_FLAGS: Record<string, string> = {
  portugal: "🇵🇹",
  spain: "🇪🇸",
  greece: "🇬🇷",
};
