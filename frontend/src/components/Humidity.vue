<template>
  <div class="example">
    <apexcharts width="700" type="radialBar" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import PostService from '../PostService'

export default {
  name: 'Humidity',

  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: 'basic-bar'
        },
        colors: ["#000066"],
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            track: {
              background: '#333',
              startAngle: -135,
              endAngle: 135,
            },
            dataLabels: {
              name: {
                show: true,
                fontSize: "45px",
              },
              value: {
                fontSize: "40px",
                show: true,
                formatter: function (val) {
                    return val + '%'
                }
              }
            }
          }
        },
        fill: {
        type: "gradient",
        gradient: {
          type: "horizontal",
          gradientToColors: ["#0000cc"],
          stops: [0, 50]
        }
       },
       labels: ['Humidity'],
      },
      series: [0],
    }
  },
  methods: {
    async getPosts() {
      const temp = await PostService.getPosts('{"type": "humidity"}', 1);
      this.series = [temp[0].val]
    }
  },
  created: function(){
    this.getPosts()
  }
}
</script>
