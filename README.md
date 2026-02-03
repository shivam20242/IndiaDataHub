**README.md**

```markdown
# Economic Data Catalogue Dashboard

A simple React-based dashboard for browsing and filtering economic datasets from two sources:  
- **IND** — Indian economic indicators (RBI, Ministry of Finance, TRAI, etc.)  
- **IMF** — International data from IMF (employment, inflation, national accounts, etc. for various countries)

The application features a sidebar for category navigation, a paginated table view of datasets, and quick switching between data sources.

## Features

- Login protection (simple localStorage-based — for demo purposes only)
- Sidebar with dynamic categories
  - For **India dataset**: uses hierarchical categories from `response1.json`
  - For **IMF dataset**: dynamically extracts available categories from the `frequent` array
- Category filtering — click a category to see only matching datasets
- "All Datasets" option to show everything
- Clean pagination (shows 3 page numbers + Previous/Next buttons)
- Responsive layout (sidebar + main content area)
- Dataset source switching (India ↔ IMF) with automatic category reset

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx         # Category navigation + dataset source switcher
│   └── Table.jsx           # Paginated table displaying dataset list
├── pages/
│   ├── Login.jsx           # Simple login page
│   └── Catalogue.jsx       # Main dashboard page
├── data/
│   ├── response1.json      # India dataset (detailed categories + frequent items)
│   └── response2.json      # IMF dataset (frequent items with country codes)
├── App.jsx                 # Routing setup
└── index.js
```

## Tech Stack

- **React** (with Hooks)
- **React Router** v6 (for navigation between Login & Catalogue)
- **Tailwind CSS** (for styling)
- JSON files as data source (no backend)

## Getting Started

### Prerequisites

- Node.js ≥ 14
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/economic-data-catalogue.git
cd economic-data-catalogue

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start development server
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Login Credentials (Demo)

Any **non-empty** email + password combination works (no real authentication).

Example:
- Email: `demo@example.com`
- Password: `123456`

### Build for Production

```bash
npm run build
# or
yarn build
```

The production build will be in the `build/` folder.

## Data Sources

| Source | File              | Description                                          | Main Categories Source                     |
|--------|-------------------|------------------------------------------------------|--------------------------------------------|
| India  | response1.json    | Indian economic & financial time series              | Structured `categories` object             |
| IMF    | response2.json    | IMF World Economic Outlook & other international data | Dynamically extracted from `frequent[].cat` |

## How Filtering Works

- **India dataset** → categories are taken directly from `categories` object
- **IMF dataset** → categories are built automatically from unique values in `frequent[].cat`
- Selecting a category filters the table to show only datasets where `item.cat === selectedCategory`
- Switching dataset source automatically resets category filter to "All"

## To-do / Possible Improvements

- [ ] Add search bar for datasets
- [ ] Support subcategory filtering
- [ ] Show dataset preview / metadata modal
- [ ] Real authentication (JWT / Firebase / Supabase)
- [ ] Sorting & filtering in table (title, frequency, unit…)
- [ ] Add country/region selector for IMF data
- [ ] Loading states & error handling
- [ ] Responsive improvements for mobile
- [ ] Export filtered data (CSV/JSON)

## Contributing

Feel free to open issues or submit pull requests!

## License

MIT License

---

Made with ❤️ for easier economic data exploration
