---
read_when:
  - ä½ æƒ³åœ¨  ä¸­ä½¿ç”¨ Amazon Bedrock æ¨¡åž‹
  - ä½ éœ€è¦ä¸ºæ¨¡åž‹è°ƒç”¨é…ç½® AWS å‡­è¯/åŒºåŸŸ
summary: åœ¨  ä¸­ä½¿ç”¨ Amazon Bedrockï¼ˆConverse APIï¼‰æ¨¡åž‹
title: Amazon Bedrock
x-i18n:
  generated_at: "2026-02-03T10:04:01Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 318f1048451a1910b70522e2f7f9dfc87084de26d9e3938a29d372eed32244a8
  source_path: bedrock.md
  workflow: 15
---

# Amazon Bedrock

 å¯ä»¥é€šè¿‡ piâ€‘ai çš„ **Bedrock Converse** æµå¼æä¾›å•†ä½¿ç”¨ **Amazon Bedrock** æ¨¡åž‹ã€‚Bedrock è®¤è¯ä½¿ç”¨ **AWS SDK é»˜è®¤å‡­è¯é“¾**ï¼Œè€Œéž API å¯†é’¥ã€‚

## piâ€‘ai æ”¯æŒçš„åŠŸèƒ½

- æä¾›å•†ï¼š`amazon-bedrock`
- APIï¼š`bedrock-converse-stream`
- è®¤è¯ï¼šAWS å‡­è¯ï¼ˆçŽ¯å¢ƒå˜é‡ã€å…±äº«é…ç½®æˆ–å®žä¾‹è§’è‰²ï¼‰
- åŒºåŸŸï¼š`AWS_REGION` æˆ– `AWS_DEFAULT_REGION`ï¼ˆé»˜è®¤ï¼š`us-east-1`ï¼‰

## è‡ªåŠ¨æ¨¡åž‹å‘çŽ°

å¦‚æžœæ£€æµ‹åˆ° AWS å‡­è¯ï¼Œ å¯ä»¥è‡ªåŠ¨å‘çŽ°æ”¯æŒ**æµå¼ä¼ è¾“**å’Œ**æ–‡æœ¬è¾“å‡º**çš„ Bedrock æ¨¡åž‹ã€‚å‘çŽ°åŠŸèƒ½ä½¿ç”¨ `bedrock:ListFoundationModels`ï¼Œå¹¶ä¼šè¢«ç¼“å­˜ï¼ˆé»˜è®¤ï¼š1 å°æ—¶ï¼‰ã€‚

é…ç½®é€‰é¡¹ä½äºŽ `models.bedrockDiscovery` ä¸‹ï¼š

```json5
{
  models: {
    bedrockDiscovery: {
      enabled: true,
      region: "us-east-1",
      providerFilter: ["anthropic", "amazon"],
      refreshInterval: 3600,
      defaultContextWindow: 32000,
      defaultMaxTokens: 4096,
    },
  },
}
```

æ³¨æ„äº‹é¡¹ï¼š

- `enabled` åœ¨å­˜åœ¨ AWS å‡­è¯æ—¶é»˜è®¤ä¸º `true`ã€‚
- `region` é»˜è®¤ä¸º `AWS_REGION` æˆ– `AWS_DEFAULT_REGION`ï¼Œç„¶åŽæ˜¯ `us-east-1`ã€‚
- `providerFilter` åŒ¹é… Bedrock æä¾›å•†åç§°ï¼ˆä¾‹å¦‚ `anthropic`ï¼‰ã€‚
- `refreshInterval` å•ä½ä¸ºç§’ï¼›è®¾ç½®ä¸º `0` å¯ç¦ç”¨ç¼“å­˜ã€‚
- `defaultContextWindow`ï¼ˆé»˜è®¤ï¼š`32000`ï¼‰å’Œ `defaultMaxTokens`ï¼ˆé»˜è®¤ï¼š`4096`ï¼‰ç”¨äºŽå·²å‘çŽ°çš„æ¨¡åž‹ï¼ˆå¦‚æžœä½ çŸ¥é“æ¨¡åž‹é™åˆ¶ï¼Œå¯ä»¥è¦†ç›–è¿™äº›å€¼ï¼‰ã€‚

## è®¾ç½®ï¼ˆæ‰‹åŠ¨ï¼‰

1. ç¡®ä¿ AWS å‡­è¯åœ¨ **Gateway ç½‘å…³ä¸»æœº**ä¸Šå¯ç”¨ï¼š

```bash
export AWS_ACCESS_KEY_ID="AKIA..."
export AWS_SECRET_ACCESS_KEY="..."
export AWS_REGION="us-east-1"
# å¯é€‰ï¼š
export AWS_SESSION_TOKEN="..."
export AWS_PROFILE="your-profile"
# å¯é€‰ï¼ˆBedrock API å¯†é’¥/Bearer ä»¤ç‰Œï¼‰ï¼š
export AWS_BEARER_TOKEN_BEDROCK="..."
```

2. åœ¨é…ç½®ä¸­æ·»åŠ  Bedrock æä¾›å•†å’Œæ¨¡åž‹ï¼ˆæ— éœ€ `apiKey`ï¼‰ï¼š

```json5
{
  models: {
    providers: {
      "amazon-bedrock": {
        baseUrl: "https://bedrock-runtime.us-east-1.amazonaws.com",
        api: "bedrock-converse-stream",
        auth: "aws-sdk",
        models: [
          {
            id: "anthropic.claude-opus-4-5-20251101-v1:0",
            name: "Claude Opus 4.5 (Bedrock)",
            reasoning: true,
            input: ["text", "image"],
            cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
            contextWindow: 200000,
            maxTokens: 8192,
          },
        ],
      },
    },
  },
  agents: {
    defaults: {
      model: { primary: "amazon-bedrock/anthropic.claude-opus-4-5-20251101-v1:0" },
    },
  },
}
```

## EC2 å®žä¾‹è§’è‰²

å½“åœ¨é™„åŠ äº† IAM è§’è‰²çš„ EC2 å®žä¾‹ä¸Šè¿è¡Œ  æ—¶ï¼ŒAWS SDK ä¼šè‡ªåŠ¨ä½¿ç”¨å®žä¾‹å…ƒæ•°æ®æœåŠ¡ï¼ˆIMDSï¼‰è¿›è¡Œè®¤è¯ã€‚ä½†æ˜¯ï¼Œ çš„å‡­è¯æ£€æµ‹ç›®å‰åªæ£€æŸ¥çŽ¯å¢ƒå˜é‡ï¼Œä¸æ£€æŸ¥ IMDS å‡­è¯ã€‚

**è§£å†³æ–¹æ³•ï¼š** è®¾ç½® `AWS_PROFILE=default` ä»¥è¡¨æ˜Ž AWS å‡­è¯å¯ç”¨ã€‚å®žé™…è®¤è¯ä»ç„¶é€šè¿‡ IMDS ä½¿ç”¨å®žä¾‹è§’è‰²ã€‚

```bash
# æ·»åŠ åˆ° ~/.bashrc æˆ–ä½ çš„ shell é…ç½®æ–‡ä»¶
export AWS_PROFILE=default
export AWS_REGION=us-east-1
```

EC2 å®žä¾‹è§’è‰²**æ‰€éœ€çš„ IAM æƒé™**ï¼š

- `bedrock:InvokeModel`
- `bedrock:InvokeModelWithResponseStream`
- `bedrock:ListFoundationModels`ï¼ˆç”¨äºŽè‡ªåŠ¨å‘çŽ°ï¼‰

æˆ–è€…é™„åŠ æ‰˜ç®¡ç­–ç•¥ `AmazonBedrockFullAccess`ã€‚

**å¿«é€Ÿè®¾ç½®ï¼š**

```bash
# 1. åˆ›å»º IAM è§’è‰²å’Œå®žä¾‹é…ç½®æ–‡ä»¶
aws iam create-role --role-name EC2-Bedrock-Access \
  --assume-role-policy-document '{
    "Version": "2012-10-17",
    "Statement": [{
      "Effect": "Allow",
      "Principal": {"Service": "ec2.amazonaws.com"},
      "Action": "sts:AssumeRole"
    }]
  }'

aws iam attach-role-policy --role-name EC2-Bedrock-Access \
  --policy-arn arn:aws:iam::aws:policy/AmazonBedrockFullAccess

aws iam create-instance-profile --instance-profile-name EC2-Bedrock-Access
aws iam add-role-to-instance-profile \
  --instance-profile-name EC2-Bedrock-Access \
  --role-name EC2-Bedrock-Access

# 2. é™„åŠ åˆ°ä½ çš„ EC2 å®žä¾‹
aws ec2 associate-iam-instance-profile \
  --instance-id i-xxxxx \
  --iam-instance-profile Name=EC2-Bedrock-Access

# 3. åœ¨ EC2 å®žä¾‹ä¸Šå¯ç”¨å‘çŽ°åŠŸèƒ½
 config set models.bedrockDiscovery.enabled true
 config set models.bedrockDiscovery.region us-east-1

# 4. è®¾ç½®è§£å†³æ–¹æ³•æ‰€éœ€çš„çŽ¯å¢ƒå˜é‡
echo 'export AWS_PROFILE=default' >> ~/.bashrc
echo 'export AWS_REGION=us-east-1' >> ~/.bashrc
source ~/.bashrc

# 5. éªŒè¯æ¨¡åž‹å·²è¢«å‘çŽ°
 models list
```

## æ³¨æ„äº‹é¡¹

- Bedrock éœ€è¦åœ¨ä½ çš„ AWS è´¦æˆ·/åŒºåŸŸä¸­å¯ç”¨**æ¨¡åž‹è®¿é—®**ã€‚
- è‡ªåŠ¨å‘çŽ°éœ€è¦ `bedrock:ListFoundationModels` æƒé™ã€‚
- å¦‚æžœä½ ä½¿ç”¨é…ç½®æ–‡ä»¶ï¼Œè¯·åœ¨ Gateway ç½‘å…³ä¸»æœºä¸Šè®¾ç½® `AWS_PROFILE`ã€‚
-  æŒ‰ä»¥ä¸‹é¡ºåºèŽ·å–å‡­è¯æ¥æºï¼š`AWS_BEARER_TOKEN_BEDROCK`ï¼Œç„¶åŽæ˜¯ `AWS_ACCESS_KEY_ID` + `AWS_SECRET_ACCESS_KEY`ï¼Œç„¶åŽæ˜¯ `AWS_PROFILE`ï¼Œæœ€åŽæ˜¯é»˜è®¤çš„ AWS SDK é“¾ã€‚
- æŽ¨ç†æ”¯æŒå–å†³äºŽæ¨¡åž‹ï¼›è¯·æŸ¥çœ‹ Bedrock æ¨¡åž‹å¡äº†è§£å½“å‰åŠŸèƒ½ã€‚
- å¦‚æžœä½ æ›´å–œæ¬¢æ‰˜ç®¡å¯†é’¥æµç¨‹ï¼Œä¹Ÿå¯ä»¥åœ¨ Bedrock å‰é¢æ”¾ç½®ä¸€ä¸ª OpenAI å…¼å®¹çš„ä»£ç†ï¼Œå¹¶å°†å…¶é…ç½®ä¸º OpenAI æä¾›å•†ã€‚

