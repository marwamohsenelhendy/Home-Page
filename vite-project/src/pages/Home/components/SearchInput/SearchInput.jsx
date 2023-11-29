export default function SearchInput({ searchQuery, setSearchQuery }) {
    return (
        <input
            type='text'
            placeholder='Enter anything to search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    )
}
