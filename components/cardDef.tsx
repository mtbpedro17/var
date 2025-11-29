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
    <div className="bg-[#282842] rounded-xl p-4 shadow-md">
      <h2 className="md:text-xl text-white font-bold mb-4">
        {cardTitle}
      </h2>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between"
          >
            <div>
              <p className="text-lg font-medium text-white">
                {item.title}
              </p>
              <p className="text-sm text-gray-400">
                {item.description}
              </p>
            </div>

            <button
              onClick={item.onAction}
              className="text-sm bg-[#2b3045] hover:bg-[#353b55] text-white px-4 py-2 rounded-md transition"
            >
              {item.actionLabel}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
