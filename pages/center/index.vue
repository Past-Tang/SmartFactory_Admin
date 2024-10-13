<template>
  <view>
    <!-- 加载提示 -->
    <view v-if="loading" class="loading">
      <view class="loading-mask"></view>
      <view class="loading-content">
        <u-icon name="loading" color="#2979ff" size="60rpx"></u-icon>
        <text class="loading-text">加载中...</text>
      </view>
    </view>

    <Navbar :hideBtn="true" bgColor="#f3f4f6"></Navbar>
    <view class="profile-top">
      <view class="user-info">
        <view>
          <view class="user-info--name">{{ user.nickName }}</view>
          <text class="user-info--account">{{ user.email || user.phonenumber || user.userName }}</text>
        </view>
        <view>
          <u-avatar src="/static/img/avatar.png" size="120rpx"></u-avatar>
        </view>
      </view>
      <view style="padding: 40rpx 40rpx 0 40rpx;">
        <view class="profile-rule">
          <u-row>
            <u-col span="8">
              <view style="color: white; font-size: 20px;">{{ user.dept ? user.dept.deptName : '未知部门' }}</view>
            </u-col>
            <u-col span="4">
              <u-button icon="question-circle" text="问题反馈" style="height: 36px;"></u-button>
            </u-col>
          </u-row>
        </view>
      </view>
    </view>
    <view style="padding: 40rpx; background-color: #fff;">
      <u-grid :columnNum="3">
        <u-grid-item @click="navigateTo('/pages/center/profile')">
          <u-icon name="account-fill" color="#2979ff" size="60rpx"></u-icon>
          <text class="btn-text">个人资料</text>
        </u-grid-item>
        <u-grid-item @click="resetPassword = true">
          <u-icon name="lock-fill" color="#2979ff" size="60rpx"></u-icon>
          <text class="btn-text">修改密码</text>
        </u-grid-item>
        <u-grid-item @click="navigateTo('/pages/center/log')">
          <u-icon name="coupon-fill" color="#2979ff" size="60rpx"></u-icon>
          <text class="btn-text">操作日志</text>
        </u-grid-item>
      </u-grid>
    </view>

    <view style="padding: 40rpx; margin-top: 300rpx;">
      <u-row gutter="32">
        <u-col span="6">
          <u-button icon="phone" text="联系我们" plain></u-button>
        </u-col>
        <u-col span="6">
          <u-button icon="reload" text="退出" type="error" @click="logout"></u-button>
        </u-col>
      </u-row>
    </view>

    <Password :show="resetPassword" @close="resetPassword = false"></Password>
    
    <!-- 版本信息 -->
    <view style="text-align: center; padding: 20rpx; color: #909399;">
      版本：{{ appVersion }}
    </view>
  </view>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
import Password from './password.vue'

export default {
  components: {
    Navbar,
    Password,
  },
  data () {
    return {
      user: {},
      resetPassword: false,
      loading: false,
      appVersion: 'v1.0.0', // 示例版本号，实际情况可能需要从服务端获取
    }
  },
  created () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      const app = this;
      this.loading = true;
      app.$store.dispatch('Info').then(res => {
        app.user = res.user;
        this.loading = false;
      });
    },
    navigateTo (url) {
      uni.navigateTo({ url: url });
    },
    logout () {
      const app = this;
      uni.showModal({
        title: '确认注销',
        content: '您确定要注销当前账号吗？',
        success (res) {
          if (res.confirm) {
            app.$store.dispatch('Logout').then(res => {
              uni.reLaunch({
                url: '/pages/login/index'
              });
            });
          }
        }
      });
    }
  }
}
</script>

<style lang="scss">
.profile-top {
  background-color: #f3f4f6;
  padding-top: 50rpx;
}

.profile-rule {
  height: 140rpx;
  line-height: 140rpx;
  padding: 0px 40rpx;
  background-color: #2979ff;
  border-radius: 16px 16px 0 0;
  box-shadow: 0px 16px 26px rgba(0, 0, 0, .8);
}

.btn-text {
  font-size: 28rpx;
  color: #606266;
}

.user-info {
  display: flex;
  justify-content: space-between;
  padding: 40rpx;
  max-width: 100%;
  color: #303133;

  &--name {
    font-size: 56rpx;
    font-weight: bold;
    width: 100%
  }

  &--account {
    font-size: 26rpx;
    color: #909399;
  }
}

.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;

  .loading-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
  }

  .loading-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .loading-text {
      margin-top: 10rpx;
      font-size: 32rpx;
      color: #2979ff;
    }
  }
}

.u-button:hover {
  background-color: darken(#2979ff, 5%);
  transform: scale(1.05);
  transition: all 0.2s ease-in-out;
}

// 为页脚版本信息添加样式
view[style*="text-align: center"] {
  background-color: #f3f4f6;
  border-top: 1px solid #ebeef5;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>