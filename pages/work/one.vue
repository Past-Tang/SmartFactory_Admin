<template>
	<view>
    <Navbar title="工作台" bgColor="#fff" :hideBtn="true" :h5Show="false"></Navbar>
    <view class="mobile-item-container">
      <view style="font-size: 40rpx; font-weight: bold; padding: 0 0 40rpx 0;">销售</view>
      <u-grid col="3">
        <u-grid-item @click="navigateTo('/pages/work/notice/list')">
          <view style="position: relative;">
            <u-icon name="chat" color="#2979ff" size="60rpx"></u-icon>
            <u-badge style="position: absolute; top: -5rpx; right: -10rpx;" type="error" numberType="overflow" max="99" v-model="todo.notice"></u-badge>
          </view>
          <text class="btn-text">销售列表</text>
        </u-grid-item>
        <u-grid-item>
          <view style="position: relative;">
            <u-icon name="list-dot" color="#2979ff" size="60rpx"></u-icon>
            <u-badge style="position: absolute; top: -5rpx; right: -10rpx;" type="error" numberType="overflow" max="99" v-model="todo.task"></u-badge>
          </view>
          <text class="btn-text">销售报表</text>
        </u-grid-item>
        <u-grid-item>
          <view style="position: relative;">
            <u-icon name="warning" color="#2979ff" size="60rpx"></u-icon>
            <u-badge style="position: absolute; top: -5rpx; right: -10rpx;" type="error" numberType="overflow" max="99" v-model="todo.error"></u-badge>
          </view>
          <text class="btn-text">销售项目</text>
        </u-grid-item>
      </u-grid>
    </view>
    <Gap />
    <view class="mobile-item-container">
      <view style="font-size: 40rpx; font-weight: bold; padding: 0 0 40rpx 0;">采购</view>
      <u-grid col="3">
        <u-grid-item>
          <u-icon name="star" color="#2979ff" size="60rpx"></u-icon>
          <text class="btn-text">采购单</text>
        </u-grid-item>
        <u-grid-item>
          <u-icon name="share-square" color="#2979ff" size="60rpx"></u-icon>
          <text class="btn-text">退货单</text>
        </u-grid-item>
		<u-grid-item>
		  <u-icon name="share-square" color="#2979ff" size="60rpx"></u-icon>
		  <text class="btn-text">采购开票</text>
		</u-grid-item>
      </u-grid>
    </view>
    <Gap />
    <view style="padding: 40rpx; background-color: #fff; margin-top: 40rpx; min-height: 600rpx;">
      <u-tabs
        :activeStyle="{
          color: '#303133',
          fontSize: '40rpx',
          fontWeight: 'bold',
          transform: 'scale(1.05)'
        }"
        :inactiveStyle="{
          color: '#606266',
          fontSize: '36rpx',
          transform: 'scale(1)'
        }"
        :list="tabs"
        @change="tabChange">
      </u-tabs>
      <view v-if="activeKey == 'work'" style="padding: 40rpx 0;">
        <u-grid col="3">
          <u-grid-item @click="navigateTo('/pages/work/notice/manage')">
            <u-icon name="edit-pen" color="#2979ff" size="60rpx"></u-icon>
            <text class="btn-text">入库管理</text>
          </u-grid-item>
          <u-grid-item @click="navigateTo('/pages/work/user/list')">
            <u-icon name="plus-people-fill" color="#2979ff" size="60rpx"></u-icon>
            <text class="btn-text">出库管理</text>
          </u-grid-item>
          <u-grid-item>
            <u-icon name="tags" color="#2979ff" size="60rpx"></u-icon>
            <text class="btn-text">成本调整单</text>
          </u-grid-item>
        </u-grid>
<!--        <u-grid col="3" style="margin-top: 40rpx;">
          <u-grid-item>
            <u-icon name="bookmark" color="#2979ff" size="60rpx"></u-icon>
            <text class="btn-text">岗位管理</text>
          </u-grid-item>
        </u-grid> -->
      </view>
      <view v-if="activeKey == 'plugin'" style="padding: 40rpx 0;">
        <u-grid col="3">
          <u-grid-item>
            <u-icon name="order" color="#2979ff" size="60rpx"></u-icon>
            <text class="btn-text">查询</text>
          </u-grid-item>
        </u-grid>
      </view>
    </view>
	</view>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
import Gap from '@/components/gap/Gap'

export default {
  components: {
    Gap,
    Navbar,
  },
  data () {
    return {
      activeKey: 'work',
      tabs: [{
        name: '仓储管理',
        key: 'work'
      }, {
        name: '其他',
        key: 'plugin'
      }],
      todo: {
        notice: 2,
        task: 5,
        error: 1
      }
    }
  },
  methods: {
    tabChange (item) {
      this.activeKey = item.key;
    },
    navigateTo (url) {
      uni.navigateTo({ url: url })
    }
  }
}
</script>

<style lang="scss">
</style>