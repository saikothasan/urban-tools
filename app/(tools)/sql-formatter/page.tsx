import { Metadata } from 'next'
import { ToolLayout, generateMetadata } from '@/components/tool-layout'
import { SQLFormatterForm } from './sql-formatter-form'

const title = 'SQL Formatter Tool'
const description = 'Format and beautify SQL queries with our free online SQL Formatter tool.'

export const metadata: Metadata = generateMetadata({ title, description })

export default function SQLFormatterPage() {
  return (
    <ToolLayout
      title={title}
      description={description}
      about="Our SQL Formatter tool helps developers and database administrators beautify and format SQL queries for improved readability. Whether you're working with complex queries or just want to standardize your SQL code, this tool makes it easy to create clean, well-formatted SQL statements."
      features={[
        "Format SQL queries with proper indentation and line breaks",
        "Support for various SQL dialects",
        "Customizable formatting options",
        "Syntax highlighting for formatted SQL",
        "Free to use with no registration required"
      ]}
      faqs={[
        {
          question: "Why should I format my SQL queries?",
          answer: "Formatting SQL queries improves readability, makes debugging easier, and helps maintain consistent coding standards across your team or project."
        },
        {
          question: "Does this tool support all SQL dialects?",
          answer: "This tool supports standard SQL syntax and common dialects like MySQL, PostgreSQL, and SQL Server. However, some highly specialized or proprietary SQL features might not be fully supported."
        },
        {
          question: "Will formatting change the functionality of my SQL query?",
          answer: "No, formatting only changes the appearance of your SQL query, not its functionality. The formatted query will produce the same results as the original query when executed."
        }
      ]}
    >
      <SQLFormatterForm />
    </ToolLayout>
  )
}

