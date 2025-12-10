import { useState } from "react";


const NewPlace = () => {
    const [title, setTitle] = useState("")
    const [city, setCity] = useState("")
    const [photos, setPhotos] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    };

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

            <div className="flex flex-col gap-1">
                <label htmlFor="photos" className="ml-2 text-2xl font-bold">Fotos</label>
                <div className="flex gap-2">
                    <input 
                    type="text" 
                    placeholder="Adicione uma foto pelo link dela" 
                    className="border border-gray-300 px-4 py-2 rounded-full grow"
                    id="photos"
                    value={photos}
                    onChange={(e) => setPhotos(e.target.value)}
                    />
                    <button className="transition hover:bg-gray-200 border border-gray-300 bg-gray-100 px-4 py-2 rounded-full cursor-pointer">Enviar foto</button>
                </div>

                <div className="mt-2 grid grid-cols-5 gap-4"> 
                    <label htmlFor="file" className="flex gap-2 items-center justify-center aspect-square rounded-2xl border border-gray-300 cursor-pointer">
                        <input 
                        type="file" 
                        id="file" 
                        className="hidden"
                        />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                            </svg>
                            Upload
                    </label>
                </div>

            </div>

        </form>
    )
};

export default NewPlace;
