import { janneEntries } from 'shared-data/janne'

const JanneGallery = () => {
  console.log('Janne says hello to TDDE51')

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16">
      <h2 className="text-3xl font-bold">Janne Gallery</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {janneEntries.map((entry) => (
          <div key={entry.id} className="relative">
            <img
              src={entry.imageUrl}
              alt={entry.name}
              className="h-auto w-auto rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
              {entry.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JanneGallery
