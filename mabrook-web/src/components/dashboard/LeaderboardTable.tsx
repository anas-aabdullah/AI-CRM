import { useState } from 'react'
import type { LeaderboardUser } from '../../data/brokerDashboard.mock'

const PAGE_SIZE = 10

type Props = {
  rows: LeaderboardUser[]
}

export function LeaderboardTable({ rows }: Props) {
  const [page, setPage] = useState(1)
  const totalPages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const start = (safePage - 1) * PAGE_SIZE
  const pageRows = rows.slice(start, start + PAGE_SIZE)

  const pageNumbers =
    totalPages <= 5
      ? Array.from({ length: totalPages }, (_, i) => i + 1)
      : safePage <= 3
        ? [1, 2, 3, 4, totalPages]
        : safePage >= totalPages - 2
          ? [1, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
          : [1, safePage - 1, safePage, safePage + 1, totalPages]

  return (
    <section className="border-b border-line bg-white py-7 sm:py-8">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[120px]">
        <h2 className="text-[24px] font-bold text-brand">Leaderboard</h2>

        <div className="mt-4 overflow-x-auto rounded-xl border border-line bg-white">
          <table className="w-full min-w-[700px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-white text-[11px] uppercase tracking-wide text-brand/70">
                <th className="px-4 py-3 font-semibold text-brand sm:px-6">
                  No.
                </th>
                <th className="px-4 py-3 font-semibold text-brand sm:px-6">
                  User Info
                </th>
                <th className="px-4 py-3 font-semibold text-brand sm:px-6">
                  Rewards
                </th>
              </tr>
            </thead>
            <tbody>
              {pageRows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-line text-brand transition hover:bg-footer/70 last:border-0"
                >
                  <td className="px-4 py-3 text-brand/80 sm:px-6">{row.rank}</td>
                  <td className="px-4 py-3 sm:px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={row.avatarUrl}
                        alt=""
                        className="size-9 rounded-full border border-line object-cover"
                        width={36}
                        height={36}
                      />
                      <span className="font-medium text-brand">{row.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-semibold text-brand sm:px-6">
                    {row.rewards}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex flex-col gap-4 text-xs text-brand/70 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span>Rows per page</span>
            <div className="inline-flex items-center gap-1 rounded-md border border-line bg-white px-2 py-1 text-[11px] font-medium text-brand">
              <span>10</span>
              <svg
                className="size-3 text-brand/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <span>
              {start + 1}-{Math.min(start + PAGE_SIZE, rows.length)} of {rows.length}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              disabled={safePage <= 1}
              onClick={() => setPage(1)}
              className="rounded-md border border-line px-2 py-1 text-brand transition hover:bg-footer disabled:opacity-40"
            >
              ≪
            </button>
            <button
              type="button"
              disabled={safePage <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="rounded-md border border-line px-2 py-1 text-brand transition hover:bg-footer disabled:opacity-40"
            >
              ‹
            </button>
            {pageNumbers.map((n, idx) => (
              <button
                key={`${n}-${idx}`}
                type="button"
                onClick={() => setPage(n)}
                className={`h-7 min-w-7 rounded-md border px-2 text-[11px] font-semibold ${
                  n === safePage
                    ? 'border-brand bg-brand text-white'
                    : 'border-line bg-white text-brand hover:bg-footer'
                }`}
              >
                {idx > 0 && n - pageNumbers[idx - 1] > 1 ? `… ${n}` : n}
              </button>
            ))}
            <button
              type="button"
              disabled={safePage >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="rounded-md border border-line px-2 py-1 text-brand transition hover:bg-footer disabled:opacity-40"
            >
              ›
            </button>
            <button
              type="button"
              disabled={safePage >= totalPages}
              onClick={() => setPage(totalPages)}
              className="rounded-md border border-line px-2 py-1 text-brand transition hover:bg-footer disabled:opacity-40"
            >
              ≫
            </button>
          </div>
        </div>
        <p className="mt-3 text-xs text-brand/50">
          The date &amp; timestamp are displayed according to the time zone of your
          browser.
        </p>
      </div>
    </section>
  )
}
