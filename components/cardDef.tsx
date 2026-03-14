"use client"

type Item = {
  title: string
  description: string
  actionLabel: string
  onAction?: () => void
}

type Props = {
  cardTitle: string
  items: Item[]
}

export default function CardDef({ cardTitle, items }: Props) {
  return (
    <div className="bg-[#040928] border border-[#050e4c] rounded-2xl p-4 shadow-xl">
      <h2 className="text-xl font-bold text-white mb-4">
        {cardTitle}
      </h2>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-[#050e4c] pb-3 last:border-0 last:pb-0"
          >
            <div>
              <p className="text-base font-medium text-white">
                {item.title}
              </p>
              <p className="text-sm text-gray-400">
                {item.description}
              </p>
            </div>

            <button
              onClick={item.onAction}
              className="text-sm bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors border border-transparent"
            >
              {item.actionLabel}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}