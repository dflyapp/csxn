---
description: Research and create a comprehensive Vietnamese medical article about a blood test parameter
---

# Medical Research Command

You are tasked with researching and creating a comprehensive Vietnamese medical article about a blood test parameter or medical indicator.

## Input

The user will provide one of the following:
- An acronym (e.g., "WBC", "PLT", "HCT")
- A figure/value (e.g., "bạch cầu", "tiểu cầu")
- A short description (e.g., "white blood cells", "platelets")

## Your Task

1. **Research the topic thoroughly** to understand:
   - What the parameter is and its medical significance
   - Normal reference ranges (for adults, children, special populations)
   - Causes of elevated values (with specific conditions)
   - Causes of decreased values (with specific conditions)
   - Symptoms for each condition
   - Related blood parameters that should be checked together
   - Diagnostic approaches
   - Treatment and prevention methods

2. **Create a comprehensive article** in Vietnamese following this structure:

### Required Sections:

```markdown
---
title: [ACRONYM]
description: [Full name] – [Brief Vietnamese description]
---

# [ACRONYM] ([Full English Name]) - [Vietnamese Name]

[Opening paragraph: Define the parameter, explain its role in the body]

## [Parameter Name] là gì?

[Detailed explanation of what this parameter is, its structure if applicable, and biological role]

### [Subsections as needed for complex topics]
- Cấu trúc
- Chức năng
- Chu kỳ sống/Quá trình tạo ra

## Ý nghĩa của chỉ số [Parameter]

[Explain clinical significance and why this parameter is measured]

## Giá trị bình thường của [Parameter]

### Người trưởng thành
- **Nam giới**: [range] [unit]
- **Nữ giới**: [range] [unit]

### Trẻ em (thay đổi theo độ tuổi)
- **Trẻ sơ sinh**: [range]
- [Other age groups]

### [Special populations if applicable]
- **Phụ nữ mang thai**: [range]
- [Others]

_(Đơn vị đo: [unit explanation])_

**Lưu ý**: Giá trị tham chiếu có thể khác nhau tùy theo từng phòng xét nghiệm và phương pháp đo.

## Nguyên nhân [Parameter] tăng cao

### [Categorize by type if applicable]

**[Category 1]:**
- **[Condition 1]**: [Detailed explanation]
- **[Condition 2]**: [Detailed explanation]

**[Category 2]:**
[Continue...]

### Triệu chứng khi [Parameter] tăng cao

**Triệu chứng chung:**
- [Symptom 1]
- [Symptom 2]

**Triệu chứng đặc hiệu:**
- [Specific symptoms]

**Biến chứng nghiêm trọng:**
- [Complications]

## Nguyên nhân [Parameter] giảm thấp

[Same structure as "tăng cao" section]

### Triệu chứng khi [Parameter] giảm thấp

[Same structure as above]

## Xét nghiệm [Parameter] kết hợp với các chỉ số khác

Để chẩn đoán chính xác, bác sĩ thường xem xét [Parameter] cùng với:

- **[Related parameter 1]**: [Brief description]
- **[Related parameter 2]**: [Brief description]

**Xét nghiệm bổ sung:**
- [Additional tests if needed]

## Cách cải thiện và duy trì chỉ số [Parameter] khỏe mạnh

### Chế độ dinh dưỡng

**Thực phẩm [để tăng/giảm]:**

*[Category 1]:*
- [Food 1]: [Specific foods]
- [Food 2]: [Specific foods]

**[Additional nutrition tips]:**
- [Tip 1]
- [Tip 2]

### Lối sống lành mạnh

- **Tập thể dục đều đặn**: [Recommendations]
- **Ngủ đủ giấc**: [Recommendations]
- **Uống đủ nước**: [Recommendations]
- **[Other lifestyle factors]**: [Recommendations]

### Bổ sung thực phẩm chức năng (if applicable)

**Khi nào cần bổ sung:**
- [Indication 1]
- [Indication 2]

**Các loại bổ sung phổ biến:**
- **[Supplement 1]**: [Details, dosage, notes]

### Điều trị y khoa

Tùy nguyên nhân, bác sĩ có thể chỉ định:
- **[Treatment 1]**: [Details]
- **[Treatment 2]**: [Details]

### Khi nào cần gặp bác sĩ?

**Cần khám ngay nếu:**
- [Emergency symptom 1]
- [Emergency symptom 2]

**Cần khám định kỳ nếu:**
- [Chronic condition 1]
- [Risk factor 1]

### Theo dõi và tái khám

- **Sau [timeframe]**: [What to expect]
- **[Additional monitoring guidelines]**

## Câu hỏi thường gặp

**1. [Common question 1]**
[Answer]

**2. [Common question 2]**
[Answer]

[Include 5-7 practical questions]

## Kết luận

[Summary paragraph emphasizing the importance of maintaining healthy levels, prevention, and when to seek medical care]
```

## Style and Content Guidelines

1. **Medical Accuracy**:
   - Use accurate medical terminology with Vietnamese translations
   - Cite specific conditions, diseases, and medications
   - Provide actual reference ranges with proper units

2. **Comprehensive Coverage**:
   - Each article should be 4,000-6,000+ words
   - Include 10-15 major sections
   - Provide specific examples and detailed lists
   - Cover both common and rare causes

3. **Practical Information**:
   - List specific foods with Vietnamese names
   - Provide dosage recommendations when appropriate
   - Include actionable lifestyle advice
   - Warn about serious symptoms requiring immediate care

4. **Vietnamese Language**:
   - Use clear, accessible Vietnamese
   - Explain medical terms when first introduced
   - Use formal but friendly tone
   - Address the reader directly when giving advice

5. **Structure**:
   - Use clear hierarchical headings (##, ###)
   - Use bullet points and numbered lists extensively
   - Include tables when comparing categories
   - Bold important terms and values

6. **Target Audience**:
   - General Vietnamese public
   - Patients trying to understand their test results
   - People seeking preventive health information
   - Non-medical professionals

## File Naming and Location

Save the article as:
- File path: `src/content/docs/co-ban/[acronym-lowercase].md`
- Use lowercase acronym for filename
- Example: `src/content/docs/co-ban/wbc.md`

## Before You Start

1. Research thoroughly - gather comprehensive medical information
2. Verify normal ranges for Vietnamese/Asian populations if different
3. Check for any existing articles to ensure consistency in style
4. Consider the parameter's relationships to other blood tests

## Example Reference Articles

Refer to these existing articles for style and depth:
- `src/content/docs/co-ban/rbc.md` - Red Blood Cells
- `src/content/docs/co-ban/hbg.md` - Hemoglobin
- `src/content/docs/co-ban/mch.md` - Mean Corpuscular Hemoglobin

These articles demonstrate the expected level of detail, structure, and Vietnamese language use.

---

Now, research and create a comprehensive article about: **{{input}}**

Remember to:
- Make it comprehensive (4,000-6,000+ words)
- Use accurate medical information
- Write in clear Vietnamese
- Follow the structure above
- Include practical, actionable advice
- Add specific examples and lists
- Create engaging, helpful content for Vietnamese readers