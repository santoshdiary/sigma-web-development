import React from "react";
import dbservice from "../appwrite/configDb";
import { Link } from "react-router-dom";

function PostCard({$id, title, featuredImage}) {
    const imageUrl = featuredImage ? dbservice.getFilePreview(featuredImage) : null;

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    {imageUrl ? (
                        <img src={imageUrl} alt={title} className='rounded-xl' />
                    ) : (
                        <div className='flex h-40 items-center justify-center rounded-xl bg-gray-200 text-gray-500'>
                            No image available
                        </div>
                    )}
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )
}


export default PostCard