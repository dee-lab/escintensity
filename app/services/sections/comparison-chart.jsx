import data from "./services-data";

const ComparisonTable = () => {

  const createTableItem = (service, community, online, training, both) => {
    return (
      <div key={service} className="service-grid__item grid grid-cols-5 gap-2 *:py-6 *:border-b-2 *:border-zinc-200 *:flex *:flex-nowrap">
        <span className="justify-start text-gray-700 text-xs md:text-sm lg:text-base">{service}</span>
        {/* <span class="material-symbols-outlined"> info </span> */}
        <span className="justify-center">
          {community ? (
            <span className="material-symbols-outlined text-green-600">
              check
            </span>
          ) : (
            <span className="material-symbols-outlined text-zinc-300">
              minimize
            </span>
          )}
        </span>
        <span className="justify-center">
          {online ? (
            <span className="material-symbols-outlined text-green-600">
              check
            </span>
          ) : (
            <span className="material-symbols-outlined text-zinc-300">
              minimize
            </span>
          )}
        </span>
        <span className="justify-center">
          {training ? (
            <span className="material-symbols-outlined text-green-600">
              check
            </span>
          ) : (
            <span className="material-symbols-outlined text-zinc-300">
              minimize
            </span>
          )}
        </span>
        <span className="justify-center">
          {both ? (
            <span className="material-symbols-outlined text-green-600">
              check
            </span>
          ) : (
            <span className="material-symbols-outlined text-zinc-300">
              minimize
            </span>
          )}
        </span>
      </div>
    )
  }

  return (
    <section className="service-grid grid grid-cols-1 gap-4 mb-8 py-16 max-w-[85%] ms-auto me-auto">
      <div className="service-grid__header grid grid-cols-5 items-center gap-2 px-6 text-center text-gray-700 font-bold *:text-xs *:md:text-sm *:lg:text-base">
        <span></span>
        <span>ESC Community</span>
        <span>Online Coaching</span>
        <span>Personal Training</span>
        <span>Online and Personal Training</span>
      </div>
      <div className="service-grid__body">
        {data.map((item) => createTableItem(item.service, item.community, item.online, item.training, item.both))}
      </div>
    </section>
  );
}
export default ComparisonTable;