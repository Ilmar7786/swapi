import moment from 'moment'

export const useMoment = () => {
    return date => moment(date).format('DD.MM.YYYY')
}