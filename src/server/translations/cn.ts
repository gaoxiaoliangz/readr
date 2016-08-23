export default {
  common: {
    terms: {
      id: 'ID',
      username: '用户名',
      password: '密码',
      percentage: '进度百分比',
      email: '邮箱',
      login: '登录项',
      description: '描述',
      name: '名称',
      creator: '创建者',
      title: '标题',
      progress: '进度',
      user: '用户'
    },
  },
  errors: {
    validation: {
      valueLimit: {
        notString: '{value}不是字符串',
        stringOnly: '输入项类型只能为字符串',
        undefined: '{value}未定义',
        invalidFormat: '{value}格式不对',
        noPureNumber: '{value}不能为纯数字',
        onlyStartWithLetters: '{value}只能以字母开头',
        length: '长度不匹配',
        minLength: '{value}长度不足',
        maxLength: '{value}超出最大长度',
        username: {
          allowedChars: '用户名只能包含字母，数字及以下字符 "-","_"',
        },
      },
      preCheck: {
        emptyObject: '提交数据不能为空',
        missRequiredFields: '{value}为必填项',
        unsupportedInput: '发现未知的输入项{value}',
        inputEmpty: '{value}输入不能为空',
      },
    },
    api: {
      general: {
        notFound: '{value}未找到',
        exists: '{value}已存在',
      },
      auth: {
        needAdminPermission: '需要管理员权限',
        loginRequired: '需要登录',
      },
    },
    schema: {
      unique: '{value}已存在'
    },
    middleware: {
      auth: {
        accessDenied: '访问被禁止',
        wrongPassword: '密码错误',
        wrongCombination: '用户名或密码错误'
      },
      oauth: {
        tokenExpired: 'token 过期',
      },
      spamprevention: {
        tooManyAttempts: '您的访问过于频繁',
        noUsername: '无用户名',
        noPassword: '无密码',
      },
    },
    mail: {
      failedSendingEmail: '邮件发送失败',
    },
    general: {
      anErrorOccurred: '发生错误',
      unknownErrorOccurred: '发生未知错误',
      notFound: '{value}未找到',
    },
  },
}
