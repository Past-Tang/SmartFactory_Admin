<template>
  <view class="index-content">
    <Navbar :hideBtn="true" title="首页" bgColor="#fff" :h5Show="false" :fixed="false"></Navbar>
    <view class="index-block">
      <view class="index-block-title">质量检测统计</view>
      <u-row gutter="16">
        <u-col span="4">
          <view class="item-tj item-tj-frist">
            <view style="padding: 16rpx; height: 100%; position: relative;">
              <view style="display: flex; color: white;">
                <text>合格率</text>
              </view>
              <view style="position: absolute; bottom: 48rpx; right: 16rpx;">
                <u-count-to :startVal="0" :endVal="97" :duration="1500" color="#fff" separator=","></u-count-to>%
              </view>
            </view>
          </view>
        </u-col>
        <u-col span="4">
          <view class="item-tj item-tj-second">
            <view style="padding: 16rpx; height: 100%; position: relative;">
              <view style="display: flex; color: white;">
                <text>不合格品数</text>
              </view>
              <view style="position: absolute; bottom: 48rpx; right: 16rpx;">
                <u-count-to :startVal="0" :endVal="23" :duration="1500" color="#fff" separator=","></u-count-to>
              </view>
            </view>
          </view>
        </u-col>
        <u-col span="4">
          <view class="item-tj item-tj-thrid">
            <view style="padding: 16rpx; height: 100%; position: relative;">
              <view style="display: flex; color: white;">
                <text>设备完好率</text>
              </view>
              <view style="position: absolute; bottom: 48rpx; right: 16rpx;">
                <u-count-to :startVal="0" :endVal="95" :duration="1500" color="#fff" separator=","></u-count-to>%
              </view>
            </view>
          </view>
        </u-col>
      </u-row>
    </view>
    <view class="index-block">
      <view class="index-block-title">近7天质量检测趋势</view>
      <view>
        <qiun-data-charts type="line" canvasId="quality_trend" :canvas2d="isCanvas2d" :resshow="delayload"
                          :opts="{xAxis:{itemCount:7,disableGrid:true},yAxis:{disableGrid:true,data:[{disabled:true}]}}"
                          :chartData="qualityTrendData" />
      </view>
      <view class="index-block-title">设备状态统计</view>
      <view>
        <qiun-data-charts type="bar" canvasId="device_status" :canvas2d="isCanvas2d" :resshow="delayload"
                          :opts="{xAxis:{disabled: true,disableGrid:true},extra:{bar:{barBorderCircle:true,width:20}},legend:{show:false}}"
                          :chartData="deviceStatusData" />
      </view>
    </view>
    <view class="index-block">
      <view class="index-block-title">检测记录</view>
      <view class="inspection-list">
        <view v-for="(item, index) in inspection_records" :key="index" class="inspection-item">
          <view class="inspection-date">
            <view class="font-middle">{{ item.date }}</view>
            <view class="font-small">{{ item.time }}</view>
          </view>
          <view class="inspection-status">
            <text :class="['iconfont', item.status === 'pass' ? 'icon-check' : 'icon-close']" />
          </view>
          <view class="inspection-details">
            <view class="inspection-result">
              <text>{{ item.status === 'pass' ? '合格' : '不合格' }}</text>
            </view>
            <view class="inspection-description">
              <text class="text-gray font-middle">{{ item.desc }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'

let _now = new Date();
let now_time = {};
now_time.year = _now.getFullYear()
now_time.month = _now.getMonth() + 1
now_time.day = _now.getDate()

export default {
  components: {
    Navbar,
  },
  data () {
    return {
      isCanvas2d: true,
      delayload: false,
      qualityTrendData: {
        "categories": [
          (_now.getDate()-6).toString().padStart(2, '0'),
          (_now.getDate()-5).toString().padStart(2, '0'),
          (_now.getDate()-4).toString().padStart(2, '0'),
          (_now.getDate()-3).toString().padStart(2, '0'),
          (_now.getDate()-2).toString().padStart(2, '0'),
          (_now.getDate()-1).toString().padStart(2, '0'),
          _now.getDate().toString().padStart(2, '0')
        ].map(d => `${now_time.month}-${d}`),
        "series": [
          {
            "name": "合格率",
            "data": [91, 92, 93, 94, 95, 96, 97],
            "type": "line",
            "style": "curve",
            "color": "#4ECDB6",
            "unit": "%"
          }
        ],
        "yAxis": [
          {"calibration":true,"position":"left","title":"合格率","titleFontSize":12,"unit":"%","tofix":0,"min":0,"disableGrid":true}
        ]
      },
      deviceStatusData: {
        "categories": ["设备A", "设备B", "设备C", "设备D", "设备E"],
        "series": [
          {
            "name": "完好率",
            "data": [95, 93, 92, 90, 88],
            "type": "bar",
            "style": "curve",
            "color": "#FF9800",
            "unit": "%"
          }
        ],
        "yAxis": [
          {"calibration":true,"position":"left","title":"完好率","titleFontSize":12,"unit":"%","tofix":0,"min":0,"disableGrid":true}
        ]
      },
      inspection_records: [
        {date: `${now_time.month}-01`, time: "11:01", status: "fail", desc: "部件X尺寸不符"},
        {date: `${now_time.month}-01`, time: "13:45", status: "pass", desc: "部件Y尺寸合格"},
        {date: `${now_time.month}-02`, time: "06:21", status: "fail", desc: "部件Z表面划伤"},
        {date: `${now_time.month}-03`, time: "07:38", status: "pass", desc: "部件Y尺寸合格"},
        {date: `${now_time.month}-08`, time: "16:28", status: "fail", desc: "部件X尺寸不符"},
        {date: `${now_time.month}-09`, time: "15:25", status: "pass", desc: "部件Y尺寸合格"},
        {date: `${now_time.month}-09`, time: "18:52", status: "pass", desc: "部件Y尺寸合格"},
        {date: `${now_time.month}-11`, time: "21:12", status: "fail", desc: "部件X尺寸不符"},
        {date: `${now_time.month}-12`, time: "13:08", status: "pass", desc: "部件Y尺寸合格"},
        {date: `${now_time.month}-12`, time: "12:41", status: "fail", desc: "部件X尺寸不符"},
        {date: `${now_time.month}-13`, time: "17:21", status: "pass", desc: "部件Y尺寸合格"},
      ]
    }
  }
}
</script>

<style lang="scss">
.index-content {
  background-color: #f3f4f6;
  min-height: 100vh;
}

.index-block {
  padding: 40rpx;
  background-color: #fff;
  margin-bottom: 20rpx;
}

.index-block-title {
  font-size: 40rpx;
  font-weight: bold;
  padding: 0 0 40rpx 0;
}

.item-tj {
  width: 100%;
  height: 160rpx;
  border-radius: 16rpx;
  display: flex;
  justify-content: center;
  align-items: center;

  &-frist {
    background-color: rgba($color: #2979ff, $alpha: 0.8);
  }

  &-second {
    background-color: rgba($color: #ff4081, $alpha: 0.8);
  }

  &-thrid {
    background-color: rgba($color: #19be6b, $alpha: 0.8);
  }
}

.inspection-list {
  padding: 20rpx;
  background-color: #fff;
  border-radius: 16rpx;
  max-height: 600rpx;
  overflow-y: auto;

  .inspection-item {
    display: flex;
    align-items: center;
    padding: 20rpx;
    border-bottom: 1px solid #e0e0e0;

    &:last-child {
      border-bottom: none;
    }

    .inspection-date {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .font-middle {
        color: #333;
      }

      .font-small {
        color: #9E9E9E;
      }
    }

    .inspection-status {
      flex: 0 0 40rpx;
      margin-right: 20rpx;

      .iconfont {
        font-size: 40rpx;
        text-align: center;
        line-height: 40rpx;

        &.icon-check {
          color: #4AABF9;
        }

        &.icon-close {
          color: #E45521;
        }
      }
    }

    .inspection-details {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .inspection-result {
        color: #000;
        font-size: 32rpx;
        font-weight: bold;
      }

      .inspection-description {
        color: #9E9E9E;
        font-size: 28rpx;
      }
    }
  }
}
</style>