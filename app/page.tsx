export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6 font-sans text-foreground">
      <section className="flex w-full max-w-md flex-col gap-6 rounded-2xl border border-border bg-card p-8 text-card-foreground">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-muted-foreground">YOUR WORD DOCUMENT</p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight">Kukkala Pranay</h1>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground">Your professional resume is ready. Download it below and open it in Microsoft Word or Google Docs.</p>
        </div>
        <a
          href="/kukkala-pranay-resume.docx"
          download="Kukkala-Pranay-Resume.docx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-5 py-3 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          Download resume (.docx)
        </a>
        <p className="text-sm leading-relaxed text-muted-foreground">Before sending, add your email address and phone number.</p>
      </section>
    </main>
  )
}
