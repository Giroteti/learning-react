import {useState} from 'react';

export default function BookablesList({bookables}) {
    const group = "Rooms";
    const bookablesInGroup = bookables.filter(b => b.group === group);
    const [bookableIndex, setBookableIndex] = useState(1);

    return (
        <div>
            <ul className="bookables items-list-nav">
                {bookablesInGroup.map((b, i) => (
                    <li
                        key={b.id}
                        className={i === bookableIndex ? "selected" : null}
                    >
                        <button
                            className="btn"
                            onClick={() => setBookableIndex(i)}
                        >
                            {b.title}
                        </button>
                    </li>
                ))}
            </ul>
            <button
                className="btn"
                onClick={() => setBookableIndex((currentIndex) => (currentIndex + 1) % bookablesInGroup.length)}
            >Next
            </button>
        </div>
    );
}