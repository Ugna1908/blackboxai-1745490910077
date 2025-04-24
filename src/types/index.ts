export interface Booking {
    id: string;
    userId: string;
    date: string;
    time: string;
    service: string;
    status: 'confirmed' | 'pending' | 'canceled';
}

export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
}