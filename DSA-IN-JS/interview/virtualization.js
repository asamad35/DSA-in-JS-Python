import { useState } from "react";
import "./styles.css";

// Virtualization Configuration Constants
const itemHeight = 20;        // Height of each list item in pixels
const itemCount = 90000000;   // Total number of items to virtualize (90 million)
const windowHeight = 200;     // Visible height of the scrollable container
const overScan = 50;          // Number of extra items to render above/below visible area for smooth scrolling

/**
 * Virtualized List Component
 * 
 * APPROACH:
 * Instead of rendering all 90 million items (which would crash the browser),
 * we only render the items that are currently visible plus some buffer items.
 * 
 * KEY CONCEPTS:
 * 1. Virtual Height: We create a container with total height = itemCount * itemHeight
 * 2. Visible Window: Only items within the scroll window are actually rendered
 * 3. Dynamic Rendering: As user scrolls, we calculate which items should be visible
 * 4. Over-scanning: Render extra items above/below for smooth scrolling experience
 */
function Virtualized() {
  // Track current scroll position from the top
  const [scrollTop, setScrollTop] = useState(0);

  // Calculate which item should be the first visible item
  // Formula: scrollTop / itemHeight gives us the item index at the top
  // We subtract overScan to render items above the visible area
  // Math.max ensures we never go below 0
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overScan);

  // Calculate how many items we need to render
  // Base calculation: windowHeight / itemHeight = items that fit in visible area
  // Add overScan * 2 to include buffer items above and below
  let activeItemsLen = Math.floor(windowHeight / itemHeight) + overScan * 2;

  // Ensure we don't try to render more items than exist
  // This handles the case when we're near the end of the list
  activeItemsLen = Math.min(activeItemsLen, itemCount - startIndex);

  /**
   * Generate only the items that need to be rendered
   * This is the core of virtualization - we create DOM elements only for visible items
   */
  const generateItems = () => {
    const activeItems = [];
    // Loop from startIndex to startIndex + activeItemsLen
    // This creates only the items that should be visible
    for (let i = startIndex; i < startIndex + activeItemsLen; i++) {
      activeItems.push(<ListItems index={i} key={i} />);
    }
    return activeItems;
  };

  return (
    <div
      // Handle scroll events to update which items should be visible
      onScroll={(e) => {
        setScrollTop(e.currentTarget.scrollTop);
      }}
      style={{
        height: `${windowHeight}px`,        // Fixed height for the scrollable container
        overflowY: "scroll",               // Enable vertical scrolling
        borderColor: "#00000",
        borderWidth: "1px",
        borderStyle: "solid",
        position: "relative",              // Needed for absolute positioning of virtual items
      }}
    >
      {/* 
        VIRTUAL HEIGHT CONTAINER
        This div has the total height of all items combined
        It creates the scrollable space without actually rendering all items
        Height = 90M items × 20px = 1.8 billion pixels of virtual space
      */}
      <div style={{ height: `${itemHeight * itemCount}px` }}>
        {/* 
          ACTUAL RENDERED ITEMS CONTAINER
          This div contains only the items that are currently visible
          We use absolute positioning and transform to place them at the correct virtual position
        */}
        <div
          style={{
            position: "absolute",
            // Transform moves the container to the correct position in virtual space
            // startIndex * itemHeight = the pixel position where our rendered items should appear
            transform: `translateY(${startIndex * itemHeight}px)`,
          }}
        >
          {generateItems()}
        </div>
      </div>
    </div>
  );
}

/**
 * Individual List Item Component
 * 
 * This component represents a single item in our virtualized list.
 * Each item has a fixed height and alternating background colors for visual distinction.
 */
function ListItems({ index }) {
  return (
    <li
      style={{
        width: "100%",                                    // Take full width of container
        height: `${itemHeight}px`,                        // Fixed height matching our constant
        listStyleType: "none",                           // Remove default bullet points
        backgroundColor: `${index % 2 === 1 ? "#f0f0f0" : "#fffff"}`, // Alternating colors for zebra striping
      }}
    >
      List Item: {index + 1}  {/* Display 1-based index for user-friendly numbering */}
    </li>
  );
}


export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Virtualized />
    </div>
  );
}
