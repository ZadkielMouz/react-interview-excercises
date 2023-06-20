import { useState, useEffect } from 'react';
import { ClockComponent } from './ClockComponent';

type FormatedDate = {
    day: string,
    month: string,
    year: string | number,
    hours: string,
    minutes: string,
    seconds: string
}

type InitialDate = {
    day: number,
    month: number,
    year: number,
    hours: number,
    minutes: number,
    seconds: number
}

const convertInTwoDigits = (num: number): string => {
    return num.toLocaleString('es-ES', {
        minimumIntegerDigits: 2,
    });
}

const formatDate = (date: InitialDate): FormatedDate => {
    return {
        ...date,
        day: convertInTwoDigits(date.day),
        month: convertInTwoDigits(date.month),
        hours: convertInTwoDigits(date.hours),
        minutes: convertInTwoDigits(date.minutes),
        seconds: convertInTwoDigits(date.seconds)
    }
}

const loadDate = new Date();

const initialDate: InitialDate = {
    day: loadDate.getDate(),
    month: loadDate.getMonth() + 1,
    year: loadDate.getFullYear(),
    hours: loadDate.getHours() > 12 ? loadDate.getHours() - 12 : loadDate.getHours(),
    minutes: loadDate.getMinutes(),
    seconds: loadDate.getSeconds(),
}


export const Clock = () => {

    const [date, setDate] = useState<FormatedDate>(formatDate(initialDate));

    useEffect(() => {

        const timerID = setInterval(() => {
            const d = new Date;

            setDate(formatDate({
                day: d.getDate(),
                month: d.getMonth() + 1,
                year: d.getFullYear(),
                hours: d.getHours() > 12 ? d.getHours() - 12 : d.getHours(),
                minutes: d.getMinutes(),
                seconds: d.getSeconds(),
            }));

        }, 1000)


        return () => {
            clearInterval(timerID);
        }
    }, [])


    return (
        <main className="flex flex-col items-center justify-center h-screen bg-white font-inter gap-10 ">
            <h1 className='text-headerGrey text-2xl'>Hora y Fecha Actual</h1>

            <div className='flex gap-11 bg-bgGrey py-9 px-11 text-clockGrey rounded-xl shadow-md'>
                <div className='flex gap-3'>
                    <ClockComponent dateType={'Día'} dateData={date.day} dateSeparator='/' />
                    <ClockComponent dateType={'Mes'} dateData={date.month} dateSeparator='/' />
                    <ClockComponent dateType={'Año'} dateData={date.year} />
                </div>
                <div className='flex gap-3'>
                    <ClockComponent dateType={'Horas'} dateData={date.hours} dateSeparator=':' />
                    <ClockComponent dateType={'Minutos'} dateData={date.minutes} dateSeparator=':' />
                    <ClockComponent dateType={'Segundos'} dateData={date.seconds} />
                </div>
            </div>


        </main>
    )
}
