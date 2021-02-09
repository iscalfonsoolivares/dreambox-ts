import React, { useState,  useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Table, Menu, Icon, Form, Button } from 'semantic-ui-react'
import { useTable, usePagination, useFilters, useGlobalFilter, useAsyncDebounce, useSortBy, Column  } from 'react-table';
import { toast } from 'react-toastify';

import { getUserLoading, userList, message } from '../../../store/user/userSelector';
import { getUserThunk } from '../../../store/user/userThunks';
import { User } from '../../../store/user/userInterfaces';

const TestPage = (): JSX.Element => {

  const pageSizeSelector = 5;

  const [filter, setFilter] = useState<string>('');
  const messageSelector = useSelector(message);
  const getUserLoadingSelector = useSelector(getUserLoading);
  const userListSelector = useSelector(userList);
  const dispatch = useDispatch();

  const debouncedFilter = useAsyncDebounce((filterVal) => {
    setGlobalFilter(filterVal || undefined);
  }, 500);  

  const data = useMemo<User[]>(() => userListSelector, [userListSelector] )
  const columns = useMemo<Column<User>[]>(
    () => [
      {
        Header: 'Id',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Comapany',
        accessor: row => row.company?.name
      },
      {
        Header: 'City',
        accessor: row => row.address?.city
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      }
    ],
    []
  )

  useEffect(() => {
    if ( userListSelector.length === 0 ) dispatch< Function >( getUserThunk() );
  }, [dispatch, userListSelector]);

  useEffect(() => {
    if (messageSelector) toast.error(messageSelector);
  },[messageSelector]);

  useEffect(() => {
    debouncedFilter(filter)
  }, [filter, debouncedFilter]);  

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    page,
    rows,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    setPageSize,
    previousPage,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable<User>(
    { columns, data, initialState: { pageIndex: 0, pageSize: pageSizeSelector } }, 
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <Grid container >
      <Grid.Row>
        <Grid.Column width='sixteen'>

          <h1 style={{marginTop:'1rem'}}>
            { getUserLoadingSelector  ? 'loading' : `Usuarios ( ${userListSelector.length} )` }
          </h1>

          <Form>
            <Form.Field>
              <input 
                value={filter || ''}
                onChange={e => { setFilter(e.target.value) }}
                placeholder="Buscar" 
                type="text"
              />
            </Form.Field>
          </Form>

          <Table celled { ...getTableProps() } >
            <Table.Header>
              { 
                headerGroups.map( headerGroup => (
                    <Table.Row { ...headerGroup.getHeaderGroupProps() } >
                      {
                        headerGroup.headers.map( column => (
                            <Table.HeaderCell { ...column.getHeaderProps(column.getSortByToggleProps()) } >
                              { column.render('Header') }
                              <span style={{padding: '0 1rem'}}>
                                {
                                  column.isSorted
                                  ? column.isSortedDesc
                                    ? <Icon name='arrow alternate circle down' />
                                    : <Icon name='arrow alternate circle up' />
                                  : ''
                                }
                              </span>                              
                            </Table.HeaderCell>
                          )
                        )
                      }
                      <Table.HeaderCell >Actions</Table.HeaderCell>                      
                    </Table.Row>
                  )
                )
              }
            </Table.Header>
            <Table.Body {...getTableBodyProps()}>
              { 
                page.map( row => {

                  prepareRow( row );

                  return (
                    <Table.Row { ...row.getRowProps() } >
                      {
                        row.cells.map( cell => {
                          return (
                            <Table.Cell { ...cell.getCellProps() } >
                              { cell.render('Cell') }
                            </Table.Cell>
                          )
                        })
                      }
                      <Table.Cell>
                        <Button icon>
                          <Icon name='edit' />
                        </Button>
                        <Button icon>
                          <Icon name='delete' />
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  )
                })
              }
            </Table.Body>
            <Table.Footer>
              <Table.Row>
              <Table.HeaderCell colSpan='2'>
                <Button
                  icon
                  labelPosition='left'
                  primary
                  size='small'
                >
                  <Icon name='user' /> Add User
                </Button>
              </Table.HeaderCell>
              <Table.HeaderCell colSpan='2'>
                En pantalla{' '} <strong>
                {(pageIndex + 1) * pageSize - (pageSize - 1)}{' '}
                - 
                {' '}{pageSize === pageSizeSelector && rows.length > pageSize
                  ?
                  (pageIndex + 1) * pageSize - pageSize + page.length 
                  :
                  rows.length
                }{' '}
                de {' '} 
                {rows.length}
                {' '} 
              </strong> usuarios
              </Table.HeaderCell>
                <Table.HeaderCell >
                  <Menu floated='right' pagination>
                    <Menu.Item as='a' icon onClick={() => gotoPage(0)} disabled={!canPreviousPage} >
                      <Icon name='angle double left' />
                    </Menu.Item>
                    <Menu.Item as='a' icon onClick={() => previousPage()} disabled={!canPreviousPage} >
                      <Icon name='angle left' />
                    </Menu.Item>
                    <Menu.Item as='a' icon onClick={() => nextPage()} disabled={!canNextPage} >
                      <Icon name='angle right' />
                    </Menu.Item>
                    <Menu.Item as='a' icon onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                      <Icon name='angle double right' />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
                <Table.HeaderCell >
                  {
                    pageSize === pageSizeSelector ? 
                    <Button onClick={() => setPageSize(data.length)}>Ver todos</Button>
                    :
                    <Button onClick={() => setPageSize(pageSizeSelector)}>Paginado</Button>
                  }
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table >

        </Grid.Column>
      </Grid.Row>
    </Grid>
  )

};
export default TestPage;