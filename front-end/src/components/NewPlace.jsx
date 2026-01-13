import { useState } from "react";
import Perks from "../components/Perks";
import axios from "axios"
import {Navigate} from "react-router-dom";
import { useUserContext } from "../contexts/UserContext.jsx";
import PhotoUploader from "./PhotoUploader.jsx";

const NewPlace = () => {
    const { user } = useUserContext()
    const [title, setTitle] = useState("")
    const [city, setCity] = useState("")
    const [photos, setPhotos] = useState([])
    const [perks, setPerks] = useState([])
    const [description, setDescription] = useState("")
    const [extras, setExtras] = useState("")
    const [price, setPrice] = useState("")
    const [checkin, setCheckin] = useState("")
    const [checkout, setCheckout] = useState("")
    const [guests, setGuests] = useState("")
    const [redirect, setRedirect] = useState(false)
    const [photoslink, setPhotosLink] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(title && city && photos.length > 0 && description && price && checkin && checkout && guests){
            try {
                const newPlace = await axios.post("/places", {
                        owner: user._id,
                        title,
                        city,
                        photos,
                        description,
                        extras,
                        perks,
                        price,
                        checkin,
                        checkout,
                        guests,
                })
                console.log(newPlace)

                setRedirect(true)
            } catch (error) {
                console.error(JSON.stringify(error))
                alert("Deu erro ao tentar criar um novo lugar!")
            }
            console.log("Todos preenchidos")
        }else{
            alert("Preencha todas as informações antes de enviar")
        }

    };


    if (redirect) return <Navigate to="/account/places" />

    return (
        <form onSubmit={handleSubmit} className="w-full px-8 flex flex-col gap-6">

            <div className="flex flex-col gap-1">
                <label htmlFor="title" className="ml-2 text-2xl font-bold">Título</label>
                <input 
                type="text" 
                placeholder="Digite o título do seu anúncio" 
                className="border border-gray-300 px-4 py-2 rounded-full"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="city" className="ml-2 text-2xl font-bold">Cidade/País</label>
                <input 
                type="text" 
                placeholder="Digite a cidade e o país do seu anúncio" 
                className="border border-gray-300 px-4 py-2 rounded-full"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />
            </div>

            <PhotoUploader {...{photoslink, setPhotosLink, setPhotos, photos}} />

            <div className="flex flex-col gap-1">
                <label htmlFor="description" className="ml-2 text-2xl font-bold">Descrição</label>
                <textarea
                placeholder="Digite o descrição do seu anúncio" 
                className="border border-gray-300 px-4 py-2 rounded-2xl h-56 resize-none"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="perks" className="ml-2 text-2xl font-bold">Comodidades</label>
                <Perks {...{ perks, setPerks }}/>   
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="extras" className="ml-2 text-2xl font-bold">Informações extras</label>
                <textarea
                placeholder="Digite o descrição do seu anúncio" 
                className="border border-gray-300 px-4 py-2 rounded-2xl h-56 resize-none"
                id="extras"
                value={extras}
                onChange={(e) => setExtras(e.target.value)}
                />
            </div>

            <div className="flex flex-col gap-1">
                <h2 className="ml-2 text-2xl font-bold">Restrições e Preço</h2>
                
                <div className="grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="ml-2 text-xl font-bold" htmlFor="price">Preço</label>
                        <input 
                        type="number" 
                        placeholder="Adicione um preço" 
                        className="border border-gray-300 px-4 py-2 rounded-full"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="ml-2 text-xl font-bold" htmlFor="checkin">Check-in</label>
                        <input 
                        type="text" 
                        placeholder="Horário de check-in" 
                        className="border border-gray-300 px-4 py-2 rounded-full"
                        id="checkin"
                        value={checkin}
                        onChange={(e) => setCheckin(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="ml-2 text-xl font-bold" htmlFor="checkout">Check-out</label>
                        <input 
                        type="text" 
                        placeholder="Horário de check-out" 
                        className="border border-gray-300 px-4 py-2 rounded-full"
                        id="checkout"
                        value={checkout}
                        onChange={(e) => setCheckout(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="ml-2 text-xl font-bold" htmlFor="guests">Número de convidados</label>
                        <input 
                        type="number" 
                        placeholder="Adicione o número de convidados" 
                        className="border border-gray-300 px-4 py-2 rounded-full"
                        id="guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        />
                    </div>
                </div>

            </div>

            <button className='hover:bg-primary-600 bg-primary-400 min-w-32 gap-2 rounded-full px-4 py-2 transition text-white cursor-pointer'>Salvar informações</button>

        </form>
    )
};

export default NewPlace;
