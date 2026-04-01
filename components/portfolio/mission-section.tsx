import { ShieldCheck, Scale, Zap } from "lucide-react"

export function MissionSection() {
  return (
    <section id="mission" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-primary tracking-wider mb-2">VALUES</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Mission & Values
        </h3>

        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I believe security is not just a technical challenge but a responsibility. 
            Every log reviewed, every alert investigated, and every vulnerability patched 
            protects real people and real organizations. I approach this work with integrity, 
            attention to detail, and a commitment to doing things right—not just fast.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mx-auto mb-4">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Security First</h4>
            <p className="text-sm text-muted-foreground">
              Defense in depth isn&apos;t just a concept—it&apos;s how I approach every system 
              and every decision. Protection is proactive, not reactive.
            </p>
          </div>

          <div className="text-center">
            <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mx-auto mb-4">
              <Scale className="h-6 w-6" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Ethical Practice</h4>
            <p className="text-sm text-muted-foreground">
              Trust is earned through consistent ethical behavior. I handle sensitive 
              information with discretion and always operate within proper authorization.
            </p>
          </div>

          <div className="text-center">
            <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mx-auto mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Continuous Growth</h4>
            <p className="text-sm text-muted-foreground">
              Threats evolve daily. Staying effective means staying curious, learning 
              constantly, and never assuming yesterday&apos;s knowledge is enough.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
