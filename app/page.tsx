import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero"
import { EmpathySection } from "@/components/sections/empathy"
import { SolutionSection } from "@/components/sections/solution"
import { ComparisonSection } from "@/components/sections/comparison"
import { BenefitsSection } from "@/components/sections/benefits"
import { HighlightsSection } from "@/components/sections/highlights"
import { PersonaSection } from "@/components/sections/persona"
import { OperationSection } from "@/components/sections/operation"
import { FamilySection } from "@/components/sections/family"
import { TrustSection } from "@/components/sections/trust"
import { GuaranteeSection } from "@/components/sections/guarantee"
import { RepairSection } from "@/components/sections/repair"
import { DomesticSection } from "@/components/sections/domestic"
import { EventSection } from "@/components/sections/event"
import { ColorsSection } from "@/components/sections/colors"
import { PriceSection } from "@/components/sections/price"
import { FaqSection } from "@/components/sections/faq"
import { YokohamaSection } from "@/components/sections/yokohama"
import { ClosingSection } from "@/components/sections/closing"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* 1. First View */}
        <HeroSection />
        {/* 2. Empathy */}
        <EmpathySection />
        {/* 3. Solution */}
        <SolutionSection />
        {/* 4. Comparison (Most Important) */}
        <div id="features">
          <ComparisonSection />
        </div>
        {/* 4.5 Benefits */}
        <BenefitsSection />
        {/* 4.7 Highlights */}
        <HighlightsSection />
        {/* 5. Persona */}
        <PersonaSection />
        {/* 6. Operation */}
        <OperationSection />
        {/* 7. Family Share */}
        <FamilySection />
        {/* 8. Trust & Safety */}
        <TrustSection />
        {/* 9. Guarantee */}
        <GuaranteeSection />
        {/* 10. Repair */}
        <RepairSection />
        {/* 11. Domestic */}
        <DomesticSection />
        {/* 12. Events */}
        <EventSection />
        {/* 13. Colors */}
        <ColorsSection />
        {/* 14. Price */}
        <PriceSection />
        {/* 15. FAQ */}
        <FaqSection />
        {/* 16. Yokohama */}
        <YokohamaSection />
        {/* 17. Closing */}
        <ClosingSection />
      </main>
      <Footer />
    </>
  )
}
