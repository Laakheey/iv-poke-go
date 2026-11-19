import { useState } from 'react';
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Scale,
  ShieldAlert,
  Sparkles,
  Swords,
  Trophy,
  Zap,
} from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'IV Mechanics',
    question: 'Why do Pokémon need low Attack IV in Great League and Ultra League?',
    answer:
      'In Pokémon GO, the Combat Power (CP) formula calculates Attack with twice the mathematical weight of Defense or Stamina (CP ≈ Atk × √Def × √Sta / 10). Because Great League (1500 CP) and Ultra League (2500 CP) have hard CP limits, a Pokémon with a low Attack IV (often 0) can be powered up several levels higher before hitting the CP cap. Those extra levels yield substantially higher Defense and Stamina, resulting in a higher total Stat Product and superior durability.',
  },
  {
    category: 'Rankings',
    question: 'What is Stat Product and how does it determine PvP Rank?',
    answer:
      'Stat Product is the definitive measure of overall combat capacity in GO Battle League (Stat Product = Effective Attack × Effective Defense × Effective HP). The IV spread among all 4,096 possibilities that achieves the highest Stat Product while staying at or below the league CP limit is crowned Rank #1 (100% Stat Product). Every other spread is rated as a percentage of that peak.',
  },
  {
    category: 'Master League',
    question: 'Why is a perfect 15/15/15 (100% IV) best in Master League?',
    answer:
      'Unlike Great and Ultra Leagues, Master League has no CP limit. Because you never have to restrict your CP, there is no trade-off between Attack and level. Higher IVs in every single stat (15/15/15) are strictly optimal for maximizing bulk, damage output, and Charge Move Priority (CMP).',
  },
  {
    category: 'Strategy',
    question: 'What is Charge Move Priority (CMP) and when should I prioritize Attack?',
    answer:
      'When both Pokémon simultaneously activate a Charged Attack on the exact same turn, Charge Move Priority (CMP) resolves the tie. The Pokémon with the higher current raw Attack stat executes its move first. In competitive mirror matches (such as Swampert vs. Swampert or Trevenant vs. Trevenant), battlers sometimes prefer an "attack-weighted" IV spread (e.g., Rank #10–#30 with higher Attack) to consistently win CMP and fire first.',
  },
  {
    category: 'Encounter Floors',
    question: 'How do IV floors (Raid, Egg, Research, Weather, Lucky) impact rankings?',
    answer:
      'Certain Pokémon cannot be caught with 0 Attack in the wild. Raid bosses, Eggs, and Field Research encounters have an IV floor of 10/10/10 (only 216 combinations). Weather-boosted wild Pokémon have a 4/4/4 floor (1,728 combinations), and Lucky Trades have a 12/12/12 floor (64 combinations). Setting the IV Floor filter in GO Arena IV recalculates rankings strictly within that eligible subset so you know the best possible IV spread you can realistically obtain.',
  },
  {
    category: 'Level Caps',
    question: 'What are Level 50 XL Candy and Level 51 Best Buddy caps?',
    answer:
      'Trainers level 31+ can collect Candy XL to power up Pokémon from Level 40 to Level 50. Best Buddy status awards a +1.0 level boost to your active buddy Pokémon, reaching Level 51. For Pokémon that max out below the CP limit (such as Medicham, Sableye, Bastiodon, and Carbink in Great League, or Talonflame and Umbreon in Ultra League), reaching Level 50 or 51 is essential to maximize their competitive potential.',
  },
  {
    category: 'Appraisal',
    question: 'How do I read my Pokémon appraisal IV bars in Pokémon GO?',
    answer:
      'In Pokémon GO, tap your Pokémon, select Appraise from the bottom-right menu. Your team leader presents three bars: Attack, Defense, and HP. Each bar consists of three segments of 5 points each (total 0–15). An empty bar is 0, one full segment is 5, two segments are 10, and a completely full orange/red bar is 15.',
  },
  {
    category: 'PvP Performance',
    question: 'Should I power up a Rank 50 Pokémon or wait for a Rank 1?',
    answer:
      'In most real battles, high-ranking IV spreads (e.g., Top 50 to Top 100) achieve 98% to 99.5% of the Rank 1 Stat Product. While Rank 1 provides optimal bulk, move timing, energy management, typing, and team composition matter far more than minor IV differences. Check nearby breakpoints and bulkpoints: if your Pokémon hits the required bulk to survive key charged attacks, powering it up is generally very safe.',
  },
];

export function SeoPvPGuide() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="bg-[#0f172a] border border-slate-800 rounded-xl p-5 sm:p-7 space-y-8 mt-8">
      {/* Section Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1.5">
          <BookOpen className="w-4 h-4" />
          <span>GO Battle League Strategy &amp; Mechanics</span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
          Complete Guide to Pokémon GO PvP IV Rankings &amp; Stat Products
        </h2>
        <p className="mt-1 text-sm text-slate-300 leading-relaxed max-w-3xl">
          Everything you need to master GO Battle League IV mechanics, understand why low Attack is
          meta in Great &amp; Ultra League, calculate Stat Products, and optimize your team.
        </p>
      </div>

      {/* 4 Feature Explainer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-4 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
            <Scale className="w-4 h-4" />
          </div>
          <h3 className="font-semibold text-sm text-white">Why 0 Attack IV?</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Attack counts roughly 2× as heavily as Defense or Stamina in CP calculation. Lower
            Attack allows your Pokémon to power up higher under the 1500 &amp; 2500 CP caps.
          </p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-4 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Trophy className="w-4 h-4" />
          </div>
          <h3 className="font-semibold text-sm text-white">Stat Product Explained</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Stat Product (Atk × Def × HP) calculates the total combat volume of a Pokémon. Rank #1
            possesses the mathematically highest stat product under the cap.
          </p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-4 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
            <Swords className="w-4 h-4" />
          </div>
          <h3 className="font-semibold text-sm text-white">CMP Tie Strategy</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Simultaneous Charged Moves are resolved by Charge Move Priority (CMP). The Pokémon with
            higher raw Attack strikes first—crucial in mirror matchups!
          </p>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-4 space-y-2">
          <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Zap className="w-4 h-4" />
          </div>
          <h3 className="font-semibold text-sm text-white">Candy XL &amp; Best Buddy</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Enables Pokémon that max out below the CP limit (such as Medicham, Sableye, or
            Talonflame) to push to Level 50 or Level 51 for peak battle power.
          </p>
        </div>
      </div>

      {/* Interactive FAQ Accordion */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-sky-400" />
          <h3 className="font-display text-base sm:text-lg font-bold text-white">
            Frequently Asked Questions (FAQ)
          </h3>
        </div>

        <div className="space-y-2.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={item.question}
                className="border border-slate-800 rounded-lg bg-slate-900/50 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-4 py-3.5 flex items-center justify-between gap-4 text-left hover:bg-slate-800/40 cursor-pointer transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-slate-200">{item.question}</span>
                  <div className="shrink-0 text-slate-400">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                    <p>{item.answer}</p>
                    <div className="mt-2 text-[11px] font-mono text-sky-400/80">
                      Category: {item.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Tips Box */}
      <div className="p-4 rounded-lg bg-sky-950/30 border border-sky-800/40 flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
        <div className="text-xs text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold">Pro Battler Tip:</strong> Don't toss a
          Pokémon just because it isn't Rank 1! A spread with 98%+ Stat Product will win almost all
          the same matchups as a Rank 1, and may even pick up bonus CMP tie wins due to higher
          attack. Check the Rankings Table above to explore all 4,096 combinations.
        </div>
      </div>
    </section>
  );
}
