import { useState } from 'react'
import type { LeaderboardUser } from '../../data/brokerDashboard.mock'

const PAGE_SIZE = 10

type Props = {
  rows: LeaderboardUser[]
}

export function LeaderboardTable({ rows }: Props) {
  const [page, setPage] = useState(1)
  const totalPages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE))
  const start = (page - 1) * PAGE_SIZE
  const pageRows = rows.slice(start, start + PAGE_SIZE)

  return (
    <section className="border-b border-line bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[120px]">
        <h2 className="text-xl font-bold text-brand sm:text-2xl">Leaderboard</h2>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-line shadow-sm">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-footer">
                <th className="px-4 py-3 font-semibold text-brand sm:px-6">
                  No
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
                  className="border-b border-line last:border-0 odd:bg-white even:bg-footer/50"
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

        <nav
          className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row"
          aria-label="Leaderboard pagination"
        >
          <p className="text-sm text-brand/70">
            Page {page} of {totalPages}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-brand transition enabled:hover:bg-footer disabled:opacity-40"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-brand transition enabled:hover:bg-footer disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </nav>
      </div>
    </section>
  )
}
