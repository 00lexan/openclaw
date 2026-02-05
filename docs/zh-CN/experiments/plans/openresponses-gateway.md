---
last_updated: "2026-01-19"
owner: 
status: draft
summary: è®¡åˆ’ï¼šæ·»åŠ  OpenResponses /v1/responses ç«¯ç‚¹å¹¶å¹²å‡€åœ°å¼ƒç”¨ chat completions
title: OpenResponses Gateway ç½‘å…³è®¡åˆ’
x-i18n:
  generated_at: "2026-02-03T07:47:33Z"
  model: claude-opus-4-5
  provider: pi
  source_hash: 71a22c48397507d1648b40766a3153e420c54f2a2d5186d07e51eb3d12e4636a
  source_path: experiments/plans/openresponses-gateway.md
  workflow: 15
---

# OpenResponses Gateway ç½‘å…³é›†æˆè®¡åˆ’

## èƒŒæ™¯

 Gateway ç½‘å…³ç›®å‰åœ¨ `/v1/chat/completions` æš´éœ²äº†ä¸€ä¸ªæœ€å°çš„ OpenAI å…¼å®¹ Chat Completions ç«¯ç‚¹ï¼ˆå‚è§ [OpenAI Chat Completions](/gateway/openai-http-api)ï¼‰ã€‚

Open Responses æ˜¯åŸºäºŽ OpenAI Responses API çš„å¼€æ”¾æŽ¨ç†æ ‡å‡†ã€‚å®ƒä¸“ä¸ºæ™ºèƒ½ä½“å·¥ä½œæµè®¾è®¡ï¼Œä½¿ç”¨åŸºäºŽé¡¹ç›®çš„è¾“å…¥åŠ è¯­ä¹‰æµå¼äº‹ä»¶ã€‚OpenResponses è§„èŒƒå®šä¹‰çš„æ˜¯ `/v1/responses`ï¼Œè€Œä¸æ˜¯ `/v1/chat/completions`ã€‚

## ç›®æ ‡

- æ·»åŠ ä¸€ä¸ªéµå¾ª OpenResponses è¯­ä¹‰çš„ `/v1/responses` ç«¯ç‚¹ã€‚
- ä¿ç•™ Chat Completions ä½œä¸ºå…¼å®¹å±‚ï¼Œæ˜“äºŽç¦ç”¨å¹¶æœ€ç»ˆç§»é™¤ã€‚
- ä½¿ç”¨éš”ç¦»çš„ã€å¯å¤ç”¨çš„ schema æ ‡å‡†åŒ–éªŒè¯å’Œè§£æžã€‚

## éžç›®æ ‡

- ç¬¬ä¸€é˜¶æ®µå®Œå…¨å®žçŽ° OpenResponses åŠŸèƒ½ï¼ˆå›¾ç‰‡ã€æ–‡ä»¶ã€æ‰˜ç®¡å·¥å…·ï¼‰ã€‚
- æ›¿æ¢å†…éƒ¨æ™ºèƒ½ä½“æ‰§è¡Œé€»è¾‘æˆ–å·¥å…·ç¼–æŽ’ã€‚
- åœ¨ç¬¬ä¸€é˜¶æ®µæ›´æ”¹çŽ°æœ‰çš„ `/v1/chat/completions` è¡Œä¸ºã€‚

## ç ”ç©¶æ‘˜è¦

æ¥æºï¼šOpenResponses OpenAPIã€OpenResponses è§„èŒƒç½‘ç«™å’Œ Hugging Face åšå®¢æ–‡ç« ã€‚

æå–çš„å…³é”®ç‚¹ï¼š

- `POST /v1/responses` æŽ¥å— `CreateResponseBody` å­—æ®µï¼Œå¦‚ `model`ã€`input`ï¼ˆå­—ç¬¦ä¸²æˆ– `ItemParam[]`ï¼‰ã€`instructions`ã€`tools`ã€`tool_choice`ã€`stream`ã€`max_output_tokens` å’Œ `max_tool_calls`ã€‚
- `ItemParam` æ˜¯ä»¥ä¸‹ç±»åž‹çš„å¯åŒºåˆ†è”åˆï¼š
  - å…·æœ‰è§’è‰² `system`ã€`developer`ã€`user`ã€`assistant` çš„ `message` é¡¹
  - `function_call` å’Œ `function_call_output`
  - `reasoning`
  - `item_reference`
- æˆåŠŸå“åº”è¿”å›žå¸¦æœ‰ `object: "response"`ã€`status` å’Œ `output` é¡¹çš„ `ResponseResource`ã€‚
- æµå¼ä¼ è¾“ä½¿ç”¨è¯­ä¹‰äº‹ä»¶ï¼Œå¦‚ï¼š
  - `response.created`ã€`response.in_progress`ã€`response.completed`ã€`response.failed`
  - `response.output_item.added`ã€`response.output_item.done`
  - `response.content_part.added`ã€`response.content_part.done`
  - `response.output_text.delta`ã€`response.output_text.done`
- è§„èŒƒè¦æ±‚ï¼š
  - `Content-Type: text/event-stream`
  - `event:` å¿…é¡»åŒ¹é… JSON `type` å­—æ®µ
  - ç»ˆæ­¢äº‹ä»¶å¿…é¡»æ˜¯å­—é¢é‡ `[DONE]`
- Reasoning é¡¹å¯èƒ½æš´éœ² `content`ã€`encrypted_content` å’Œ `summary`ã€‚
- HF ç¤ºä¾‹åœ¨è¯·æ±‚ä¸­åŒ…å« `OpenResponses-Version: latest`ï¼ˆå¯é€‰å¤´éƒ¨ï¼‰ã€‚

## æè®®çš„æž¶æž„

- æ·»åŠ  `src/gateway/open-responses.schema.ts`ï¼Œä»…åŒ…å« Zod schemaï¼ˆæ—  gateway å¯¼å…¥ï¼‰ã€‚
- æ·»åŠ  `src/gateway/openresponses-http.ts`ï¼ˆæˆ– `open-responses-http.ts`ï¼‰ç”¨äºŽ `/v1/responses`ã€‚
- ä¿æŒ `src/gateway/openai-http.ts` ä¸å˜ï¼Œä½œä¸ºé—ç•™å…¼å®¹é€‚é…å™¨ã€‚
- æ·»åŠ é…ç½® `gateway.http.endpoints.responses.enabled`ï¼ˆé»˜è®¤ `false`ï¼‰ã€‚
- ä¿æŒ `gateway.http.endpoints.chatCompletions.enabled` ç‹¬ç«‹ï¼›å…è®¸ä¸¤ä¸ªç«¯ç‚¹åˆ†åˆ«åˆ‡æ¢ã€‚
- å½“ Chat Completions å¯ç”¨æ—¶å‘å‡ºå¯åŠ¨è­¦å‘Šï¼Œä»¥è¡¨æ˜Žå…¶é—ç•™çŠ¶æ€ã€‚

## Chat Completions å¼ƒç”¨è·¯å¾„

- ä¿æŒä¸¥æ ¼çš„æ¨¡å—è¾¹ç•Œï¼šresponses å’Œ chat completions ä¹‹é—´ä¸å…±äº« schema ç±»åž‹ã€‚
- é€šè¿‡é…ç½®ä½¿ Chat Completions æˆä¸ºå¯é€‰ï¼Œè¿™æ ·æ— éœ€ä»£ç æ›´æ”¹å³å¯ç¦ç”¨ã€‚
- ä¸€æ—¦ `/v1/responses` ç¨³å®šï¼Œæ›´æ–°æ–‡æ¡£å°† Chat Completions æ ‡è®°ä¸ºé—ç•™ã€‚
- å¯é€‰çš„æœªæ¥æ­¥éª¤ï¼šå°† Chat Completions è¯·æ±‚æ˜ å°„åˆ° Responses å¤„ç†å™¨ï¼Œä»¥ä¾¿æ›´ç®€å•åœ°ç§»é™¤ã€‚

## ç¬¬ä¸€é˜¶æ®µæ”¯æŒå­é›†

- æŽ¥å— `input` ä¸ºå­—ç¬¦ä¸²æˆ–å¸¦æœ‰æ¶ˆæ¯è§’è‰²å’Œ `function_call_output` çš„ `ItemParam[]`ã€‚
- å°† system å’Œ developer æ¶ˆæ¯æå–åˆ° `extraSystemPrompt` ä¸­ã€‚
- ä½¿ç”¨æœ€è¿‘çš„ `user` æˆ– `function_call_output` ä½œä¸ºæ™ºèƒ½ä½“è¿è¡Œçš„å½“å‰æ¶ˆæ¯ã€‚
- å¯¹ä¸æ”¯æŒçš„å†…å®¹éƒ¨åˆ†ï¼ˆå›¾ç‰‡/æ–‡ä»¶ï¼‰è¿”å›ž `invalid_request_error` æ‹’ç»ã€‚
- è¿”å›žå¸¦æœ‰ `output_text` å†…å®¹çš„å•ä¸ªåŠ©æ‰‹æ¶ˆæ¯ã€‚
- è¿”å›žå¸¦æœ‰é›¶å€¼çš„ `usage`ï¼Œç›´åˆ° token è®¡æ•°æŽ¥å…¥ã€‚

## éªŒè¯ç­–ç•¥ï¼ˆæ—  SDKï¼‰

- ä¸ºä»¥ä¸‹æ”¯æŒå­é›†å®žçŽ° Zod schemaï¼š
  - `CreateResponseBody`
  - `ItemParam` + æ¶ˆæ¯å†…å®¹éƒ¨åˆ†è”åˆ
  - `ResponseResource`
  - Gateway ç½‘å…³ä½¿ç”¨çš„æµå¼äº‹ä»¶å½¢çŠ¶
- å°† schema ä¿å­˜åœ¨å•ä¸ªéš”ç¦»æ¨¡å—ä¸­ï¼Œä»¥é¿å…æ¼‚ç§»å¹¶å…è®¸æœªæ¥ä»£ç ç”Ÿæˆã€‚

## æµå¼å®žçŽ°ï¼ˆç¬¬ä¸€é˜¶æ®µï¼‰

- å¸¦æœ‰ `event:` å’Œ `data:` çš„ SSE è¡Œã€‚
- æ‰€éœ€åºåˆ—ï¼ˆæœ€å°å¯è¡Œï¼‰ï¼š
  - `response.created`
  - `response.output_item.added`
  - `response.content_part.added`
  - `response.output_text.delta`ï¼ˆæ ¹æ®éœ€è¦é‡å¤ï¼‰
  - `response.output_text.done`
  - `response.content_part.done`
  - `response.completed`
  - `[DONE]`

## æµ‹è¯•å’ŒéªŒè¯è®¡åˆ’

- ä¸º `/v1/responses` æ·»åŠ ç«¯åˆ°ç«¯è¦†ç›–ï¼š
  - éœ€è¦è®¤è¯
  - éžæµå¼å“åº”å½¢çŠ¶
  - æµå¼äº‹ä»¶é¡ºåºå’Œ `[DONE]`
  - ä½¿ç”¨å¤´éƒ¨å’Œ `user` çš„ä¼šè¯è·¯ç”±
- ä¿æŒ `src/gateway/openai-http.e2e.test.ts` ä¸å˜ã€‚
- æ‰‹åŠ¨ï¼šç”¨ `stream: true` curl `/v1/responses` å¹¶éªŒè¯äº‹ä»¶é¡ºåºå’Œç»ˆæ­¢ `[DONE]`ã€‚

## æ–‡æ¡£æ›´æ–°ï¼ˆåŽç»­ï¼‰

- ä¸º `/v1/responses` ä½¿ç”¨å’Œç¤ºä¾‹æ·»åŠ æ–°æ–‡æ¡£é¡µé¢ã€‚
- æ›´æ–° `/gateway/openai-http-api`ï¼Œæ·»åŠ é—ç•™è¯´æ˜Žå’ŒæŒ‡å‘ `/v1/responses` çš„æŒ‡é’ˆã€‚


