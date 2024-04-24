const MATRIXDATA  = [
  {
    name: "BLANK",
    included: [
      "Training Programs",
      "Nutrition Plan",
      "Weekly Progress Tracker",
      "Weekly Workout analysis",  
      "Supplement Discount",
      "Access To ESC Community",
      "Daily Support And Accountability",
      "Bespoke Training Programs",
      "Bespoke Nutrition Plan",
      "Two Weekly Check Ins",
      "60 minute 121 Personal Training Session",
    ],
  },

  {
    name: "ESC Community",
    1: "✅",
    2: "✅",
    3: "✅",
    4: "✅", 
    5: "✅",
    6: "✅",
    7: "✅",
    8: "⬜",
    9: "⬜",
    10: "⬜",
    11: "⬜",

  },
  {
    name: "Online Coaching",
    1: "⬜",
    2: "⬜",
    3: "✅",
    4: "✅", 
    5: "✅",
    6: "✅",
    7: "✅",
    8: "✅",
    9: "✅",
    10: "✅",
    11: "⬜",
  },
  {
    name: "Personal Training",
    1: "⬜",
    2: "⬜",
    3: "✅",
    4: "✅", 
    5: "✅",
    6: "✅",
    7: "✅",
    8: "✅",
    9: "⬜",
    10: "✅",
    11: "✅",
  },
  {
    name: "Online Coaching + Personal Training",
    1: "⬜",
    2: "⬜",
    3: "✅",
    4: "✅", 
    5: "✅",
    6: "✅",
    7: "✅",
    8: "✅",
    9: "✅",
    10: "✅",
    11: "✅",
  },
]

const TableHeadings = () => {
  return (
    <tr>
      {MATRIXDATA.map((name, index) => {
        return (
          <th key={index}>{name.name}</th>
        )
      })}
    </tr>
  )
}

const TableContent = () => {
  return (
    <tr>
      {MATRIXDATA.map((item, index) => {
        return (
          <>
            <td key={index}>{item.included}</td>
          </>
        )
      })}
    </tr>
  )
}

const ComparisonTable = () => {
  return (
    <section>
      <table>
        <TableHeadings />
        <TableContent />
      </table>
    </section>
  )
}

export default ComparisonTable;