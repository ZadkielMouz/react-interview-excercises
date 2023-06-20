
type Props = {
    dateType: string,
    dateData: string | number,
    dateSeparator?: string,
}

export const ClockComponent = ({ dateType, dateData, dateSeparator }: Props) => {
    return (
        <div className='flex gap-5'>
            <div className='flex flex-col items-center gap-5'>
                <span className='text-5xl'>{dateData}</span>
                <span>{dateType}</span>
            </div>
            {
                dateSeparator && <span className='text-5xl'>{dateSeparator}</span>
            }
        </div>
    )
}
