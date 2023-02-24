import moment from '../Config/moment';

export const diffDate = (now: Date, past: Date) => {
    const diff = Math.abs(now.getTime() - past.getTime());
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

export const MomentDiffDate = (past: Date, now: Date) => {
    const diff = moment(now, "DD/MM/YYYY H:mm:ss").diff(moment(past, "DD/MM/YY H:mm:ss"));
    return moment.duration(diff).asDays();
}