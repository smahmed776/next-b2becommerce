import { createContext } from "react";

export const RatingContext = createContext();

export const RatingContextProvider = ({ children }) => {
    const Rating = (num) => {
        if (num === 5) {
            return (
                <>
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-warning"></span>
                </>
            )
        } else if (num === 4) {
            return (
                <>
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-dark"></span>
                </>
            )
        } else if (num === 3) {

            return (
                <>
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-dark"></span>
                    <span className="bi bi-star-fill text-dark"></span>
                </>
            )
        } else if (num === 2) {
            return (
                <>
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-dark"></span>
                    <span className="bi bi-star-fill text-dark"></span>
                    <span className="bi bi-star-fill text-dark"></span>
                </>
            )

        } else if (num === 1) {
            return (
                <>
                    <span className="bi bi-star-fill text-warning"></span>
                    <span className="bi bi-star-fill text-dark"></span>
                    <span className="bi bi-star-fill text-dark"></span>
                    <span className="bi bi-star-fill text-dark"></span>
                    <span className="bi bi-star-fill text-dark"></span>
                </>
            )

        } else {
            return (
                <>
                    <span className="bi bi-star-fill text-dark"></span>
                    <span className="bi bi-star-fill text-dark"></span>
                    <span className="bi bi-star-fill text-dark"></span>
                    <span className="bi bi-star-fill text-dark"></span>
                    <span className="bi bi-star-fill text-dark"></span>
                </>

            )
        }
    }

    return (
        <RatingContext.Provider value={
            {
                Rating
            }
        }>
            {children}
        </RatingContext.Provider>
    )
}