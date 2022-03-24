import { Routes, Route } from 'react-router-dom';
import { AvistamientoCardItem } from '../Avistamientos/AvistamientoCardItem';
import { AvistamientosList } from '../Avistamientos/AvistamientosList';

import { Navbar } from '../ui/Navbar';




export const AppRouter = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>

                    <Route path="/" element={<AvistamientosList/>} />

                </Routes>
            </div>
        </>
    )
}