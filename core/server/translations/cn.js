const cn = {
  common: {
    terms: {
      id: 'ID',
      username: '用户名',
      password: '密码',
      percentage: '进度百分比',
      email: '邮箱',
      login: '登录项',
      description: '描述',
      name: '名称'
    }
  },
  errors: {
    validation: {
      unmatchedOptionQuantity: '提供的参数数目有误',
      invalidJson: 'JSON 格式不正确',
      inputEmpty: '{value}输入不能为空',
      inputUndefined: '输入不能为未定义',
      inputTypeInvalid: '输入项类型只能为字符串',
      invalidFormat: '{value}格式不对',
      inputUnsupported: '发现不支持的输入项',
      minLength: '{value}长度不足',
      maxLength: '{value}超出最大长度',
      password: {
        pureNumber: '密码不能为纯数字'
      },
      username: {
        onlyStartWithLetters: '用户名只能以字母开头',
        allowedChars: '用户名只能包含字母，数字及以下字符 "-","_"'
      }
    },
    api: {
      auth: {
        userDoesNotExist: '用户不存在',
        needAdminPermission: '需要管理员权限',
        loginRequired: '需要登录'
      },
      books: {
        bookNotFound: '书籍未找到',
        doubanInfoNotFound: '未找到书籍信息',
        bookExists: '书籍已存在'
      },
      collections: {
        notFound: '书单未找到'
      },
      users: {
        userNotFound: '用户不存在',
        usernameUnavailable: '用户名已存在',
        emailUnavailable: '该邮箱已被使用',
        usernameOrEmailUnavailable: '用户名或邮箱已被使用'
      }
    },
    middleware: {
      auth: {
        accessDenied: '访问被禁止',
        pleaseSignIn: '请登录后访问',
        wrongPassword: '密码错误'
      },
      oauth: {
        tokenExpired: 'token 过期'
      },
      spamprevention: {
        tooManyAttempts: '您的访问过于频繁',
        noUsername: '无用户名',
        noPassword: '无密码'
      }
    },
    mail: {
      failedSendingEmail: '邮件发送失败'
    },
    models: {
      books: {
      },
      users: {
      }
    },
    general: {
      anErrorOccurred: '发生错误',
      unknownErrorOccurred: '发生未知错误',
      notFound: '未找到'
    }
  },
  warnings: {
  },
  notices: {
  }
}

module.exports = cn
