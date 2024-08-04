const getDateIntervals = (dateFrom, dateTo, interval, step, format = "MM/DD/YYYY") => {
    const chunks = [];
    let startDate = moment(dateFrom);
    const endDate = moment(dateTo);

    while (startDate.isBefore(endDate) || startDate.isSame(endDate)) {
        const chunkStart = startDate;
        startDate = startDate.clone().add(step, interval);
        const chunkEnd = startDate.isAfter(endDate) ? endDate : startDate;

        chunks.push({ from: chunkStart.format(format), to: chunkEnd.format(format) });
    }

    return chunks;
};