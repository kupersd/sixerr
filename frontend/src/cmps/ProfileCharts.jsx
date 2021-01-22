import React from 'react';
import { Bar } from 'react-chartjs-2'

const SIXERR_GREEN = 'rgb(43, 190, 118)'

export class ProfileCharts extends React.Component {

    state = {
        chart: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: 'Income',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    SIXERR_GREEN,
                    SIXERR_GREEN,
                    SIXERR_GREEN,
                    SIXERR_GREEN,
                    SIXERR_GREEN,
                    SIXERR_GREEN
                ]
            }]
        }
    }
    render() {
        const { chart } = this.state
        
        return (
            <>
                <Bar
                    data={chart}
                    width={100}
                    height={50}
                />
            </>
        )
    }
}

