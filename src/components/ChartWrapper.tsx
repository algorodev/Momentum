import Chart from 'react-apexcharts'

type ChartWrapperProps = {
	chartConfig: ApexChart
}

const ChartWrapper = ({ chartConfig }: ChartWrapperProps) => (
	<Chart {...chartConfig} />
)

export default ChartWrapper
