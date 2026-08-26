// AI Daily News - Valuation Chart
(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();

  var chartDom = document.getElementById('chart-valuation');
  if (!chartDom) return;

  var chart = echarts.init(chartDom, null, { renderer: 'svg' });

  var data = [
    { name: 'Broadcom AI融资', value: 100, color: accent },
    { name: 'DeepSeek IPO估值', value: 86, color: accent2 },
    { name: 'Hugging Face出售估值', value: 13, color: accent2 },
    { name: 'NVIDIA收购Poolside', value: 6, color: accent },
    { name: 'Safe Superintelligence融资', value: 5, color: accent2 }
  ];

  chart.setOption({
    animation: false,
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      backgroundColor: bg2,
      borderColor: rule,
      textStyle: { color: ink, fontSize: 12 },
      formatter: function(params) {
        var p = params[0];
        return p.name + ': <b>$' + p.value + 'B</b>';
      },
      appendToBody: true
    },
    grid: {
      left: '3%',
      right: '5%',
      bottom: '3%',
      top: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        color: muted,
        fontSize: 11,
        formatter: '${value}B'
      },
      axisLine: { lineStyle: { color: rule } },
      splitLine: { lineStyle: { color: rule, type: 'dashed', opacity: 0.4 } }
    },
    yAxis: {
      type: 'category',
      data: data.map(function(d) { return d.name; }),
      axisLabel: {
        color: ink,
        fontSize: 12,
        fontWeight: 600
      },
      axisLine: { lineStyle: { color: rule } },
      axisTick: { show: false }
    },
    series: [{
      type: 'bar',
      data: data.map(function(d) {
        return {
          value: d.value,
          itemStyle: {
            color: d.color,
            borderRadius: [0, 6, 6, 0]
          }
        };
      }),
      barWidth: '50%',
      label: {
        show: true,
        position: 'right',
        color: ink,
        fontSize: 12,
        fontWeight: 700,
        formatter: '${c}B'
      }
    }]
  });

  window.addEventListener('resize', function() {
    chart.resize();
  });
})();
