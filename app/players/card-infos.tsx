'use client';

interface CardInfosProps {
    title: string;
    description: string;
}

export function CardInfos({ title, description }: CardInfosProps) {
    return (
        <div>
            <h3 className="text-white text-2xl font-bold text-center">{ title }</h3>
            <p className="text-center">{description || 'N/D'}</p>
        </div>
    );
}