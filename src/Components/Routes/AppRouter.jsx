import { Routes, Route } from 'react-router-dom';
import { AvistamientoCardItem } from '../Avistamientos/AvistamientoCardItem';
import { AvistamientosList } from '../Avistamientos/AvistamientosList';
import { EspeciesList } from '../Especies/EspeciesList';
import { LugaresList } from '../Lugares/LugaresList';

import { Navbar } from '../ui/Navbar';




export const AppRouter = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>

                    <Route path="/" element={<AvistamientosList/>} />
                    <Route path="/especies" element={<EspeciesList/>} />
                    <Route path="/lugares" element={<LugaresList/>} />

                </Routes>
            </div>
        </>
    )
}