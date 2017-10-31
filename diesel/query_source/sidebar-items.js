initSidebarItems({"struct":[["MoreThanOnce","A table appears in the from clause two or more times."],["Never","A table never appears in the from clause."],["Once","A table appears in the from clause exactly one time."]],"trait":[["AppearsInFromClause",""],["Column","A column on a database table. Types which implement this trait should have been generated by the `table!` macro."],["JoinTo","Indicates that two tables can be used together in a JOIN clause. Implementations of this trait will be generated for you automatically by the association annotations from codegen."],["Plus","Add two peano numbers together."],["Queryable","Trait indicating that a record can be queried from the database. This trait can be derived automatically using `diesel_codegen`. This trait can only be derived for structs, not enums."],["QueryableByName","Deserializes the result of a query constructed with [`sql_query`]."],["Table","A SQL database table. Types which implement this trait should have been generated by the `table!` macro."]]});