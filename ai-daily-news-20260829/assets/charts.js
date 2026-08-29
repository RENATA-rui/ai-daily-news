(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();
  var warn = style.getPropertyValue('--warn').trim();

  var chart1 = echarts.init(document.getElementById('chart-valuation'), null, { renderer: 'svg' });
  chart1.setOption({
    animation: false,
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      appendToBody: true,
      formatter: function(params) {
        var p = params[0];
        return p.name + '<br/>金额: <strong>' + p.value + ' 十亿美元</strong>';
      }
    },
    grid: {
      left: '3%',
      right: '8%',
      bottom: '3%',
      top: '8%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        color: muted,
        fontSize: 11,
        formatter: function(v) {
          if (v >= 1000) return (v / 1000) + '万亿';
          return v + 'B';
        }
      },
      axisLine: { lineStyle: { color: rule } },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } }
    },
    yAxis: {
      type: 'category',
      data: [
        'OpenWorker 生态估值',
        'Hugging Face 收购估值',
        'Anthropic AI for Science 投入',
        'OpenAI 估值',
        'Anthropic IPO 目标',
        'NVIDIA 市值'
      ],
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
      data: [
        { value: 0.5, itemStyle: { color: warn } },
        { value: 13, itemStyle: { color: warn } },
        { value: 2, itemStyle: { color: accent2 } },
        { value: 852, itemStyle: { color: accent2 } },
        { value: 2000, itemStyle: { color: accent } },
        { value: 5200, itemStyle: { color: accent } }
      ],
      barWidth: '55%',
      label: {
        show: true,
        position: 'right',
        color: ink,
        fontSize: 11,
        fontWeight: 700,
        formatter: function(p) {
          if (p.value >= 1000) return '$' + (p.value / 1000).toFixed(1) + 'T';
          return '$' + p.value + 'B';
        }
      },
      itemStyle: {
        borderRadius: [0, 4, 4, 0]
      }
    }]
  });
  window.addEventListener('resize', function() { chart1.resize(); });
})();